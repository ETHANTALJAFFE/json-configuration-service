import { validationResult } from 'express-validator';
import createError from 'http-errors';

const utils = {
    handleRequestValidation: (validations) => async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            next();
        }
        next(createError(400, errors.array()));
    }
};

export default utils;
