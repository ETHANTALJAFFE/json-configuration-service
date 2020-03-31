const express = require('express');

const port = 3000;
const app = express();

const jsonConfig = require('json-configurator-store');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/project/create', async (req, res) => {
    const projectName = req.body.projectName;
    await jsonConfig.createProject(projectName);
    res.status(201).send(`Successfully created ${projectName}`);
});

app.get('/project/:projectName', async (req, res) => {
    const projectName = req.params.projectName;
    const files = await jsonConfig.getProjectFiles(projectName);
    res.status(200).json(files);
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))