import bookshelf from '../db';   /// from validators folder-- db.js
import Todo from './todo';

const TABLE_NAME = 'categories';

/**
 * User model.
 */
class Category extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
    
  }
  todo(){
    return this.belongsToMany(Todo);
  }

  get hasTimestamps() {
    return true;
  }
}

export default Category;
