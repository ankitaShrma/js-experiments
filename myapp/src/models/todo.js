import bookshelf from '../db';   /// from validators folder-- db.js
import Category from './category';
import User from './user';


const TABLE_NAME = 'todos';

/**
 * User model.
 */
class Todo extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
    
  }

  category(){
    return this.belongsToMany(Category);
  }

  todoBelongsUser(){
    return this.belongsToMany(User);
  }

  get hasTimestamps() {
    return true;
  }
}

export default Todo;
