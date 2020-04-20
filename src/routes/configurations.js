import express from 'express';
import configurationsController from '../controllers/configurations';

const configurationsRouter = express.Router({ mergeParams: true });

configurationsRouter.post('/', configurationsController.createConfiguration);

configurationsRouter.get('/:configuration', configurationsController.getConfiguration);


export default configurationsRouter;
