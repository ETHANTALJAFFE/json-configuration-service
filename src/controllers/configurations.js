import createError from 'http-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';

const configurationsController = {
    createConfiguration: async (req, res, next) => {
        const {
            projectName, configName, configData, suffix
        } = req.body;
        try {
            await jsonConfig.ConfigurationManagement.createConfiguration(projectName, configName, configData, suffix);
            res.status(201).send(`Successfully created ${configName} config inside ${projectName} project`);
        } catch (err) {
            next(err);
        }
    },
    getConfiguration: async (req, res, next) => {
        const { projectName, configuration } = req.params;
        if (typeof projectName !== 'string' || typeof configuration !== 'string') {
            next(createError(400, 'Invalid query'));
        }
        try {
            const configs = await jsonConfig.ConfigurationManagement
                .getConfiguration(projectName, configuration, '.json');
            res.status(200).json(configs);
        } catch (err) {
            next(createError(404, err.message));
        }
    }
};

export default configurationsController;
