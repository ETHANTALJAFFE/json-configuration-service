import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import jsonConfig from 'json-configurator-store';

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/project/create', async (req, res) => {
    const { projectName } = req.body;
    await jsonConfig.createProject(projectName);
    res.status(201).send(`Successfully created ${projectName}`);
});

app.get('/project/:projectName', async (req, res) => {
    const { projectName } = req.params;
    const files = await jsonConfig.getProjectFiles(projectName);
    res.status(200).json(files);
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
