import cors from 'cors';
import path from 'path';
import YAML from 'yamljs';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import projectsRouter from './src/routes/projects';

const swaggerDocument = YAML.load('./swagger.yaml');

const port = 8080 || process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../editor/build')));

app.use('/projects', projectsRouter);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
    res.status(err.status).send(err);
    next();
});

app.get('/', (req, res, next) => {
    res.status(200).send('Welcome to the JSON Configuration Service!\n To see the editor, change the path to /editor');
    next();
});

app.use('/editor', function (req, res) {
    res.sendFile(path.join(__dirname, '../editor/build', 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
