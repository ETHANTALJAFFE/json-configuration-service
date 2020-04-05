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
        await jsonConfig.ProjectManagement.createProject(projectName);
        res.status(201).send(`Successfully created ${projectName}`);
    } catch (err) {
        next(err);
    }
});

app.post('/project/create/config', async (req, res, next) => {
    const {
        projectName, configName, configData, suffix
    } = req.body;
    try {
        await jsonConfig.ConfigurationManagement.createConfiguration(projectName, configName, configData, suffix);
        res.status(201).send(`Successfully created ${configName} config inside ${projectName} project`);
    } catch (err) {
        next(err);
    }
});

app.get('/project/:projectName/configs', async (req, res, next) => {
    const { projectName } = req.params;
    try {
        const configs = await jsonConfig.ProjectManagement.getProjectConfigurations(projectName);
        res.status(200).json(configs);
    } catch (err) {
        next(createError(404, err.message));
    }
});

app.get('/project/:projectName/configs/:configName', async (req, res, next) => {
    const { projectName, configName } = req.params;
    try {
        const configs = await jsonConfig.ConfigurationManagement.getConfiguration(projectName, configName, '.json');
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
