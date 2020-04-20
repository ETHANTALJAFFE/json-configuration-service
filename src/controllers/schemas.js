import createError from 'http-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';

const schemasController = {
    getSchema: async (req, res, next) => {
        const { projectName, schemaName } = req.params;
        try {
            const schema = await jsonConfig.SchemaManagement.getSchema(projectName, schemaName);
            res.status(200).json(schema);
        } catch (err) {
            next(createError(404, err.message));
        }
    },
    createSchema: async (req, res, next) => {
        const {
            projectName, schemaName, schemaData, suffix
        } = req.body;
        try {
            const schema = await jsonConfig.SchemaManagement.createSchema(projectName, schemaName, schemaData, suffix);
            res.status(200).json(schema);
        } catch (err) {
            next(createError(404, err.message));
        }
    }
};

export default schemasController;
