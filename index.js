import express from 'express';
import createError from 'http-errors';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/project/create', async (req, res, next) => {
    const { projectName } = req.body;
    try {
        await jsonConfig.createProject(projectName);
        res.status(201).send(`Successfully created ${projectName}`);
    } catch (err) {
        next(err);
    }
});

app.get('/project/:projectName/configs', async (req, res, next) => {
    const { projectName } = req.params;
    try {
        const configs = await jsonConfig.getProjectConfigurations(projectName);
        res.status(200).json(configs);
    } catch (err) {
        next(createError(404, err.message));
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err, req, res, next) => {
    res.status(err.status).send(err);
    next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
