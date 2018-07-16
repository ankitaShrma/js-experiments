import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as userService from '../services/userService';
import { findUser, userValidator } from '../validators/userValidator';
import jwt from 'jsonwebtoken';
import UIDGenerator from 'uid-generator';
import bcrypt from 'bcrypt';

const uidgen = new UIDGenerator();

const router = Router();

/**
 * GET /api/users
 */
router.get('/', (req, res, next) => {
  userService
    .getAllUsers()
    .then(data => {
      //console.log(data);
      res.json({ data });
    })
    .catch(err => next(err));
});

/**
 * GET /api/users/:id
 */
router.get('/:id', (req, res, next) => {
  userService
    .getUser(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * POST /api/users
 */
router.post('/', (req, res, next) => {
  userService
    .createUser(req.body)
    
});

router.post('/login', (req, res, next) => {
  userService
    .loginUser(req.body)
    .then(todo => {
      console.log(todo)
      if(todo === null){
        res.json('User not found')
      }
      // else{
      //   console.log(req.body.password, todo.username)
      //   res.json(todo.username)
        
      //     if (err){
      //       res.json('incorrect password');
      //     }
          else{
            
            bcrypt.compare(req.body.password, todo.attributes.password, (err, result) => {
              if(result){

                const user = req.body;
                userService
                .getUserName(user.username)
                .then(data => {
                  console.log(data.attributes.id)
                  userService.userAlreadyHasToken(data.attributes.id).then(name => {
                    //res.json(data)
                    if(name.length < 1){
                    uidgen.generate((err, uid) => {
                      if (err) throw err;
                      console.log(uid, data.attributes.id, 'ppppppppppppp'); 
                      userService.postRefreshToken(data.attributes.id, uid).then()
                      .catch(err => console.log(err));
                      
                    });
                  }

                  else{
                    console.log("user already logged in")
                }

                  })
                  
                
                  jwt.sign({user:user}, 'secretkey',  (err, token) =>{ //{expiresIn: '50s' },
                      res.json({
                        token
                      })
                     // console.log(token)
                  });       
                
                })
                .catch(err => next(err)); 

              }

              else{
                res.json("Password incorrect")
              }               
            })       
      }
     
    })
    
  });
    // .then(data => {
    //   console.log(data);
    //   res.status(HttpStatus.CREATED).json({ data })
    // })
    // .catch(err => next(err));


/**
 * PUT /api/users/:id
 */
router.put('/:id', findUser, (req, res, next) => {
  userService
    .updateUser(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

/**
 * DELETE /api/users/:id
 */
router.delete('/:id', findUser, (req, res, next) => {
  userService
    .deleteUser(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));
});

router.delete('/logout/:id', findUser, (req, res, next) => {
  console.log(req.params.id)
  userService
    .logoutUser(req.params.id)
    .then(data => res.status(HttpStatus.NO_CONTENT).json({ data }))
    .catch(err => next(err));

})

export default router;
