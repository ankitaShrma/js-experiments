import Boom from 'boom';
import Category from '../models/category';

export function getAllCategories() {
    console.log('getallcategories')
  
    return Category.fetchAll();   // sorting   
  }

export function getCategory(id) {

    return new Category({ id }).fetch().then(todo => {
        if(!todo){
            res.json('todo not found');
            }
            return todo
    });
}

export function postCategories(cat){
    return new Category(cat).save().then(cat => cat.refresh());  //refresh() updates the attributes of model

}

export function putCategory(id, cat){
    const {title, details} = cat;
    return new Category({ id }).save({username: username, email: email, password: password })
    .then(cat => cat.refresh());
}

export function deleteCategory(id){
    return new Category({ id }).fetch().then(cat => cat.destroy());
}
