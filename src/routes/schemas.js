import express from 'express';
import schemasController from '../controllers/schemas';

const schemasRouter = express.Router();

schemasRouter.post('/', schemasController.createSchema);
schemasRouter.get('/', schemasController.getSchema);

export default schemasRouter;
