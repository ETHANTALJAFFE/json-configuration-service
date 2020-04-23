import express from 'express';

import schemasRouter from './schemas';
import utils from '../utils';
import configurationsRouter from './configurations';
import projectsController from '../controllers/projects';

const { handleRequestValidation } = utils;

const projectsRouter = express.Router();

const { getProject, createProject, getAllProjects } = projectsController.requests;

const { createProject: validateCreatProject, getProject: validateGetProject } = projectsController.validate;
projectsRouter.post('/', handleRequestValidation(validateCreatProject),
    createProject);

projectsRouter.get('/', getAllProjects);

projectsRouter.get('/:projectName', handleRequestValidation(validateGetProject),
    getProject);

projectsRouter.use('/:projectName/configurations', configurationsRouter);

projectsRouter.use('/:projectName/schemas', schemasRouter);

export default projectsRouter;
