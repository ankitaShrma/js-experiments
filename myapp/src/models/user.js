import bookshelf from '../db';
import securePassword from 'bookshelf-secure-password';
import Todo from './todo';
import UserToken from './userToken';

const TABLE_NAME = 'users';

/**
 * User model.
 */
class User extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }

  get hasSecurePassword(){
    return true;
  }
  userhasTodo(){
    return this.hasMany(Todo);

  }
  userHasToken(){
    return this.hasOne(UserToken)
  }

}

export default User;
