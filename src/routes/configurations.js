import express from 'express';
import configurationsController from '../controllers/configurations';
import utils from '../utils';

const { handleRequestValidation } = utils;

const configurationsRouter = express.Router({ mergeParams: true });

const { validate } = configurationsController;

configurationsRouter.post('/', handleRequestValidation([...validate.createConfiguration]),
    configurationsController.requests.createConfiguration);

configurationsRouter.get('/:configName', handleRequestValidation([...validate.getConfiguration]),
    configurationsController.requests.getConfiguration);


export default configurationsRouter;
