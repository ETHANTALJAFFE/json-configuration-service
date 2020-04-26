import express from 'express';
import configurationsController from '../controllers/configurations';
import utils from '../utils';

const { handleRequestValidation } = utils;

const configurationsRouter = express.Router({ mergeParams: true });

const { createConfiguration, getConfiguration } = configurationsController.requests;

const {
    getConfiguration: validateGetConfiguration,
    createConfiguration: validateCreateConfiguration
} = configurationsController.validate;

configurationsRouter.post('/', handleRequestValidation(validateCreateConfiguration),
    createConfiguration);

configurationsRouter.get('/:configName', handleRequestValidation(validateGetConfiguration),
    getConfiguration);


export default configurationsRouter;
