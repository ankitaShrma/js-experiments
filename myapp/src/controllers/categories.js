import { Router } from 'express';
import * as categoryService from '../services/categoryService';

const router = Router();

function findCat(req, res, next) {
  return categoryService
    .getCategory(req.params.id)
    .then(next())
    .catch(err => next(err));
}

router.get('/',  (req, res, next) => {
  
//   if(Object.keys(req.query).length === 0){
//     console.log('inside getall no query')
    categoryService
    .getAllCategories()
    .then(data => res.json({ data: data}))
    .catch(err => next(err));

    })
//    


router.get('/:id', (req, res, next) => {
  console.log(req.params.id)
  categoryService.getCategory(req.params.id)
  .then(data => res.json({ data }))
  .catch(err => res.json(err));

})

router.post('/', (req, res, next) => {
  console.log(req.body);
  categoryService
    .postCategories(req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});


router.put('/:id', findCat, (req, res, next) => {
  categoryService
    .putCategory(req.params.id, req.body)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

router.delete('/:id', findCat, (req, res, next) => {
  categoryService
    .deleteCategory(req.params.id)
    .then(data => res.json({ data }))
    .catch(err => next(err));
});

export default router;
