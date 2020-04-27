import cors from 'cors';
import YAML from 'yamljs';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import projectsRouter from './src/routes/projects';

const swaggerDocument = YAML.load('./swagger.yaml');

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/projects', projectsRouter);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
    res.status(err.status).send(err);
    next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
