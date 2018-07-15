import Boom from 'boom';
import Todo from '../models/todo';
import Category from '../models/category';

/**
 * Get all todos.
 *
 * @return {Promise}
 */





 
export async function getAllTodos() {
  console.log('getalltodos')



  //return Todo.forge().orderBy('title','DESC').fetchAll();   // sorting, forge() helps to instantiate a new collection without new

  // return Todo
  // .forge()
  // .fetchPage({
  //   pageSize:2,
  //   page:1,    
  // })
  // .then(function(todo){
  //   console.log('hello============')
  //   console.log(todo);
  //   if(!todo)
  //     res.json('todo not found');
  //   return todo;
  // })

  const todos = await Todo.fetchAll({withRelated: 'category'})
  //console.log(todos, 'todos')
  //return todos;

  // return Todo.fetchAll({withRelated: 'category'})
  // .then(todos => {
  //   console.log(todos.models);
  //   return todos;
  //   })

  const todosWithCategories = todos.models.filter((todoModel)=>{
   
    //console.log(todoModel.toJSON())
    let x = todoModel.toJSON();
    console.log(todoModel.get('userId'), 'lllllllllllllll')
  })

   console.log(todosWithCategories, '===========')
   return todosWithCategories;


   

  //////////////////////////////////////////QUERY/////////////

//  return Todo.query(function(qb) {
//     qb.where('category', 'title', '=', 'Office');
//     console.log(qb)
//   }).fetchAll({withRelated: 'category'})
  ////////////////////////////////////////////////////////////////


//   return Todo.fetchAll({withRelated: [
//      {
//          'category': function(qb) {
//              qb.where("title", '=', 'School');
//          }
//      }
// ]})



  //return Todo.fetchAll();//  to get all Todos>>> first one

}


// export function getTodoCategory(query){
//   const {title, details } = query;
//   console.log(title, 'here is get from query');
  
//   return Todo.where({id:1}).fetch([ withRelated : 'categories' ])
//   .then(todo => {
//     if(!todo)
//       res.json('todo not found');
//     return todo;
//   })


// }



/////////////////////////////////////////////////////////////////////////////////////////////////////////

// return Todo.query(function(qb) {
//   qb.where('other_person', 'LIKE', '%Demo').orWhere('other_id', '>', 10);
// }).fetch()
//   .then(function(model) {
//     // ...
//   });




export function getTodoTitle(query){
  const {title, details } = query;
  console.log(title, 'here is get from query');
  //return new Todo({title:title}).fetch().then(todo => {
    return Todo.query(function(qb) {
        qb.where('title', 'LIKE', title);
      }).fetchAll()
  //       .then(function(model) {
  //   if(!todo){
  //     res.json('todo not found');
  //   }
  //   return todo
  // })
}

/**
 * Get a todo.
 *
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function getTodo(id) {

  return new Todo({ id }).fetch().then(todo => {
    if (!todo) {
      throw new Boom.notFound('Todo not found');
    }
    //console.log(req.query.title);
    return todo;
  });
}



// export function getTodoCategory(query) {

//   console.log(query, 'filter via category')

//   // return new Todo({ id }).fetch().then(todo => {
//   //   if (!todo) {
//   //     throw new Boom.notFound('Todo not found');
//   //   }
//   //   //console.log(req.query.title);
//   //   return todo;
//   // });
// }





/**
 * Create new todo.
 *
 * @param  {Object}  todo
 * @return {Promise}
 */
export function createTodo(todo) {
	console.log(todo);
  return new Todo(todo).save().then(todo => todo.refresh());
}

/**
 * Update a todo.
 *
 * @param  {Number|String}  id
 * @param  {Object}         todo
 * @return {Promise}
 */
export function updateTodo(id, todo) {
  console.log(todo);
  return new Todo({ id }).save({ 
  	title: todo.title,
  details: todo.details,
   user_id: todo.user_id}).then(todo => todo.refresh());
}

/**
 * Delete a todo.
 * @param  {Number|String}  id
 * @return {Promise}
 */
export function deleteTodo(id) {
  return new Todo({ id }).fetch().then(todo => todo.destroy());
}
