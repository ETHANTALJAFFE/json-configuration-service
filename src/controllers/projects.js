import createError from 'http-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';
import { body, param } from 'express-validator';

const requests = {
    createProject: async (req, res, next) => {
        const { projectName } = req.body;
        try {
            await jsonConfig.ProjectManagement.createProject(projectName);
            res.status(201).send(`Successfully created ${projectName}`);
        } catch (err) {
            next(err);
        }
    },
    getProject: async (req, res, next) => {
        const { projectName } = req.params;
        try {
            const configs = await jsonConfig.ProjectManagement.getProjectConfigurations(projectName);
            const configsWithoutFileExtension = configs.map((configName) => configName.replace(/\.[^/.]+$/, ''));
            res.status(200).json(configsWithoutFileExtension);
        } catch (err) {
            next(createError(404, err.message));
        }
    },
    getAllProjects: async (req, res, next) => {
        try {
            const allProjects = await jsonConfig.ProjectManagement.getAllProjects();
            res.status(200).send(allProjects);
        } catch (err) {
            next(err);
        }
    }
};
const validation = {
    createProject: () => [body('projectName').exists()],
    getProject: () => [param('projectName').exists().isString()]
};
const projectsController = {
    requests,
    validate: (actionName) => validation[actionName]()
};

export default projectsController;
