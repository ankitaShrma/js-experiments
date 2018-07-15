import bookshelf from '../db';   /// from validators folder-- db.js
import User from './user';


const TABLE_NAME = 'user_token';

/**
 * User model.
 */
class UserToken extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
    
  }

  get hasTimestamps() {
    return true;
  }

  tokenBelongsTo(){
    return this.belongsTo(User)
  }
}

export default UserToken;
