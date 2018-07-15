import Boom from 'boom';
import User from '../models/user';
import UserToken from '../models/userToken';

import bcrypt from 'bcrypt';
import UIDGenerator from 'uid-generator';

const uidgen = new UIDGenerator();

/**
 * Get all users.
 *
 * @return {Promise}
 */
export function getAllUsers() {
  return User.fetchAll();
}

/**
 * Get a user.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function getUser(id) {
  return new User({ id }).fetch().then(user => {
    if (!user) {
      throw new Boom.notFound('User not found');
    }

    return user;
  });
}

// export function insertUid(uid){
//   return new User({ id }).save({ 
//     username: user.username,
//     password: user.password,
//     email: user.email
//     }).then(user => user.refresh());

// }

export function getUserName(username) {
  return new User({ username }).fetch().then(user => {
    if (!user) {
      throw new Boom.notFound('User not found');
    }

    return user;
  });
}

export function postRefreshToken(id, uid){
  return new UserToken( {user_id: id, refresh_token: uid }  
   ).save()
}

export function getRefreshToken(id){
  return new UserToken({ id }).fetch().then(refresh => {
    if (!refresh) {
      throw new Boom.notFound('No refresh token');
    }

    return refresh;
  });

}
export function checkRefresh(token){
  return UserToken.query(function(qb) {
    qb.where('refresh_token', 'LIKE', token);
  }).fetch().then(refresh => {
    if (!refresh) {
      throw new Boom.notFound('No refresh token');
    }

    return refresh;
  });
}

/**
 * Create new user.
 *
 * @param  {Object}  user
 * @return {Promise}
 */
export function createUser(user) {
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err){
      // return res.status(500).json({
      //   error: err
      console.log(err, 'gjfjdkgjkdfgjkdhgjkdhgkjd')
      //next(err);
     // });
    }
    else{
      //console.log(hash, user)
      return new User( {username: user.username,
         password: user.password,
         email: user.email}
       
        ).save().then(data => {
          console.log(data);
          //res.status(HttpStatus.CREATED).json({ data })
          
        })
        .catch(err => console.log(err));

    }
  })
  
}

export function loginUser(user){
  console.log(user, 'user')

  return User.query(function(qb) {
    qb.where('username', 'LIKE', user.username);
  }).fetch();
 
  // let q = User.query(function(qb){
  //   qb.where('username', '=', 'anku')
  // });
  // User.findWhere('username')
  // console.log('uuuuuuuuuu', q, '=========')
}

/**
 * Update a user.
 *
//  * @param  {Number|String}  id
//  * @param  {Object}         user
//  * @return {Promise}
 */
export function updateUser(id, user) {
  return new User({ id }).save({ 
    username: user.username,
    password: user.password,
    email: user.email
    }).then(user => user.refresh());
}

/**
 * Delete a user.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function deleteUser(id) {
  return new User({ id }).fetch().then(user => user.destroy());
}
export function logoutUser(userid) {
  return UserToken
  .where( 'user_id', '=', userid ).destroy();
}
