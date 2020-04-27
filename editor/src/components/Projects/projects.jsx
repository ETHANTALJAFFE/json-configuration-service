import config from '../../config/default';
import React, { useEffect, useState } from 'react';
import { Grid, Paper, Container, Card, CardActionArea, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
import { ThemedCard, ThemedContainer } from '../themed';

const Projects = props => {
    const [projects, setProjects] = useState([]);

    const getProjects = () => {
        (async () => {
            const response = await fetch(config.server + config.api.getProjects);

            const projectsList = await response.json();
            setProjects(projectsList);
        })();
    };

    useEffect(getProjects, []);

    return (
        <ThemedContainer elevation={0} square maxWidth={'md'} style={{ padding: '40px' }}>
            <Typography variant="overline" component={'div'}>
                Projects
            </Typography>
            <Grid spacing={4} container direction="row" justify="flex-start" alignItems="center" xs={10}>
                {projects.map(projectName => (
                    <Grid item md>
                        <Card component={'div'} variant={'outlined'} elevation={2} square={false}>
                            <CardActionArea style={{ textAlign: 'center' }}>
                                <div style={{ padding: '5vh 5vw' }}>{projectName}</div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </ThemedContainer>
    );
};

export default Projects;
