import express from 'express';

// import schemasRouter from './schemas';
import utils from '../utils';
import configurationsRouter from './configurations';
import projectsController from '../controllers/projects';

const { handleRequestValidation } = utils;

const projectsRouter = express.Router();

projectsRouter.post('/', projectsController.validate('createProject'), handleRequestValidation,
    projectsController.requests.createProject);

projectsRouter.get('/', projectsController.requests.getAllProjects);

projectsRouter.get('/:projectName', projectsController.validate('getProject'), handleRequestValidation,
    projectsController.requests.getProject);

projectsRouter.use('/:projectName/configurations', configurationsRouter);

// projectsRouter.use('/:projectName/schemas', schemasRouter);
export default projectsRouter;
