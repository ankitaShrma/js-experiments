import Joi from 'joi';
import validate from '../utils/validate';
import * as todoService from '../services/todoService';

const SCHEMA = {
  title: Joi.string()
    .max(90)
};

/**
 * Validate create/update user request.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function todoValidator(req, res, next) {
  return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => res.json(err));
}

/**
 * Validate users existence.
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {Promise}
 */
function findTodo(req, res, next) {
  return todoService
    .getTodo(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

export { findTodo, todoValidator };
