import express from 'express';
import createError from 'http-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';
import configurationsRouter from './configurations';

const projectsRouter = express.Router();

projectsRouter.post('/', async (req, res, next) => {
    const { projectName } = req.body;
    try {
        await jsonConfig.ProjectManagement.createProject(projectName);
        res.status(201).send(`Successfully created ${projectName}`);
    } catch (err) {
        next(err);
    }
});

projectsRouter.get('/:projectName', async (req, res, next) => {
    const { projectName } = req.params;

    if (typeof projectName !== 'string') {
        next(createError(400, 'Invalid query'));
    }

    try {
        const configs = await jsonConfig.ProjectManagement.getProjectConfigurations(projectName);
        res.status(200).json(configs);
    } catch (err) {
        next(createError(404, err.message));
    }
});

projectsRouter.get('/', async (req, res, next) => {
    try {
        const allProjects = await jsonConfig.ProjectManagement.getAllProjects();
        res.status(200).send(allProjects);
    } catch (err) {
        next(err);
    }
});

projectsRouter.use('/:projectName/configurations', configurationsRouter);

export default projectsRouter;
