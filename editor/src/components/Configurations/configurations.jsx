import React, { useEffect, useState } from 'react';
import { Grid, Container, Card, CardActionArea } from '@material-ui/core';

const Configurations = props => {
    const [configurations, setProjects] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:8080/projects');

            const projectsList = await response.json();
            setProjects(projectsList);
        })();
    }, []);
    const columnsSize = 5;
    const rowsSize = projects.length / columnsSize;
    const rows = `repeat(${rowsSize}, ${100 / columnsSize}vw)`;
    const columns = `repeat(${columnsSize}, 1fr)`;

    return (
        <Container maxWidth={'md'} style={{ paddingTop: '40px' }}>
            <Grid spacing={4} container direction="row" justify="flex-start" alignItems="center">
                {projects.map(projectName => (
                    <Grid item>
                        <Card
                            component={'div'}
                            variant={'elevation'}
                            elevation={2}
                            style={{ width: '10vw', height: '10vw' }}
                        >
                            <CardActionArea style={{ height: '100%' }}>{projectName}</CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Configurations;
