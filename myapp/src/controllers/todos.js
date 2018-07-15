import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as todoService from '../services/todoService';
import * as userService from '../services/userService';

import jwt from 'jsonwebtoken';
import UIDGenerator from 'uid-generator';
import User from '../models/user';


import { fchown } from 'fs';
import UserToken from '../models/userToken';
//import { findTodo, todoValidator } from '../validators/todoValidator';

///

// To filter by category:
// SELECT DISTINCT t.title,c.title 

// FROM todos t 	join todos_categories tc ON (t.id = tc.todo_id)
//                 join categories c ON (tc.categories_id = c.id)

// WHERE c.title = 'Office'

///

const router = Router();

function findTodo(req, res, next) {
  return todoService
    .getTodo(req.params.id)
    .then(next())
    .catch(err => next(err));
}

function findParam(req, res){
  if(req.query == null){
    console.log('inside controller');
    fnc = todoService.getTodoTitle(req.query)
}
  else  {
    fnc = todoService.getAllTodos();}
return fnc;

}

function verifyToken(req, res, next){
  // get the header value

  const bearHeader = req.headers['authorization2'];
  console.log('bearHeader', bearHeader)
  // Authorization: getheader <token>
  if(typeof bearHeader !== 'undefined'){
    const headerToken = bearHeader.split(' ');
    const getToken = headerToken[1];
    req.token = getToken;
    next();

  }
  else{
    res.json('403 forbidden')
  }
}


/**
 * GET /api/todos
 */
router.get('/', verifyToken, (req, res, next) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err)
    {
      //res.json('forbidden. Might have expired. Use your refresh key.')
      const refreshHeader = req.headers['authorization'];
      console.log(refreshHeader, 'refresh')
      if(typeof refreshHeader === 'undefined'){
        res.json('lfjdklfgkfdjhgkjdfhgkfdjh')
      }
      else{
        const refreshToken = refreshHeader.split(' ');
        const getRefresh = refreshToken[1];
        userService
        .checkRefresh(getRefresh)
        .then(ref => {
          if(ref.length<1){
            res.json('User Refresh Token Not found')
          }
          else{
            //console.log(ref.id, 'ppppp')
            userService
            .getUser(14)
            .then(user => {
            jwt.sign({user:user}, 'secretkey', {expiresIn: '20s'}, (err, token) =>{ //{expiresIn: '50s' },
            res.json({
              token
            })
        });
      })
        
        // console.log(ref.id)
        // res.json(ref.id)
      }
    
  })
  .catch(err => next(err));
}
}
    else{
      let username = authData.user.username
      userService
      .getUserName(username)
      .then(data => {
       // console.log(data);
        res.json({ authData });
      })
      .catch(err => next(err));
      //res.json(username)
    }
  })
  
  // if(Object.keys(req.query).length === 0){
  //   console.log('inside getall no query')
  //   todoService
  //   .getAllTodos()
  //   .then(data => res.json({ data: data}))
  //   .catch(err => next(err));
     
    // }
    

    
    // else{

    //   console.log('inside get given query')

    // todoService
    // .getTodoTitle(req.query)
    // .then(data => res.json({ data: data}))
    // .catch(err => next(err));
    // }

      
   
});

router.get('/categories', (req, res, next) => {
 // console.log('categories')
})

// router.get('/',  (req, res, next) => {
//   todoService
//    // console.log('inside get')
//     .getTodoTitle(req.query)
//     .then(data => res.json({ data: data}))
//     .catch(err => next(err));
// });

/**
 * GET /api/todos/:id
 */
// router.get('/:id', (req, res, next) => {
//   todoService
//     .getTodo(req.params.id)
//     .then(data => res.json({ data }))
//     .catch(err => res.json(err));
// });


router.get('/:id', (req, res, next) => {
  console.log(req.params.id)

  todoService
  .getTodo(req.params.id)
  .then(data => res.json({ data }))
  .catch(err => res.json(err));

})


/**
 * POST /api/todos
 */
router.post('/', (req, res, next) => {
  console.log(req.body);
  todoService
    .createTodo(req.body)
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
});

/**
 * PUT /api/todos/:id
 */
router.put('/:id', findTodo, (req, res, next) => {
  todoService
    .updateTodo(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * DELETE /api/todos/:id
 */
router.delete('/:id', findTodo, (req, res, next) => {
  todoService
    .deleteTodo(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
});

export default router;
