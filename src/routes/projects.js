import express from 'express';
import configurationsRouter from './configurations';
import projectsController from '../controllers/projects';

const projectsRouter = express.Router();

projectsRouter.post('/', projectsController.createProject);

projectsRouter.get('/', projectsController.getAllProjects);

projectsRouter.get('/:projectName', projectsController.getProject);

projectsRouter.use('/:projectName/configurations', configurationsRouter);

export default projectsRouter;
