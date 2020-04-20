import express from 'express';
import projectsRouter from './src/routes/projects';

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/projects', projectsRouter);

app.use((err, req, res, next) => {
    res.status(err.status).send(err);
    next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
