import express from 'express';
import schemasController from '../controllers/schemas';
import utils from '../utils';

const { handleRequestValidation } = utils;

const schemasRouter = express.Router();

const { createSchema, getSchema } = schemasController.requests;
const { creatSchema: validateCreateSchema, getSchema: validateGetSchema } = schemasController.validate;

schemasRouter.post('/', handleRequestValidation(validateCreateSchema), createSchema);

schemasRouter.get('/', handleRequestValidation(validateGetSchema), getSchema);

export default schemasRouter;
