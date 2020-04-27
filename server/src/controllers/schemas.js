import { check } from 'express-validator';
import createError from 'http-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';

const requests = {
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

const validate = {
    getSchema: [
        check('projectName')
            .exists()
            .withMessage('Missing field')
            .isString()
            .withMessage('Field must be of type String'),
        check('schemaName')
            .exists()
            .withMessage('Missing field')
            .isString()
            .withMessage('Field must be of type String'),
    ],
    createSchema: [
        check('projectName')
            .exists()
            .withMessage('Missing Field')
            .isString()
            .withMessage('Field must be of type String'),
        check('schemaName')
            .exists()
            .withMessage('Missing Field')
            .isString()
            .withMessage('Field must be of type String'),
        check('schemaData')
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
const schemasController = {
    requests,
    validate
};

export default schemasController;
