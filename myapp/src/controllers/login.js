import { Router } from 'express';
import HttpStatus from 'http-status-codes';
//import * as loginService from '../services/loginService';
import jwt from 'jsonwebtoken';



const router = Router();




router.get('/',  (req, res, next) => {
    const user = {
      id: 1,
      username:'anku'
        
    }
  jwt.sign({user:user}, 'secretkey', {expiresIn: '20s' }, (err, token) =>{
    res.json({
      token
    })
  } );

});


export default router;
