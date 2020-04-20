import createError from 'http-errors';
import { check } from 'express-validator';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';

const configurationManagement = jsonConfig.ConfigurationManagement;

const requests = {
    createConfiguration: async (req, res, next) => {
        const { configName, configData, suffix } = req.body;
        const { projectName } = req.params;
        try {
            await configurationManagement
                .createConfiguration(projectName, configName, JSON.stringify(configData), suffix);
            res.status(201).send(`Successfully created ${configName} config inside ${projectName} project`);
        } catch (err) {
            next(err);
        }
    },
    getConfiguration: async (req, res, next) => {
        const { projectName, configName } = req.params;
        try {
            const configs = await jsonConfig.ConfigurationManagement
                .getConfiguration(projectName, configName, '.json');
            res.status(200).json(configs);
        } catch (err) {
            next(createError(404, err.message));
        }
    }
};

const validate = {
    getConfiguration: [
        check('projectName')
            .exists()
            .withMessage('Missing field')
            .isString()
            .withMessage('Field must be of type String'),
        check('configName')
            .exists()
            .withMessage('Missing field')
            .isString()
            .withMessage('Field must be of type String'),
    ],
    createConfiguration: [
        check('projectName')
            .exists()
            .withMessage('Missing Field')
            .isString()
            .withMessage('Field must be of type String'),
        check('configName')
            .exists()
            .withMessage('Missing Field')
            .isString()
            .withMessage('Field must be of type String'),
        check('configData')
            .exists()
            .withMessage('Missing Field')
            .not()
            .isString()
            .withMessage('Field must be a JSON Object'),
        check('suffix')
            .exists()
            .withMessage('Missing Field')
            .isString()
            .withMessage('Field must be of type String')
    ]
};

const configurationsController = {
    requests,
    validate
};

export default configurationsController;
