import React from 'react';
import { person } from '@jsonforms/examples';
import { JsonForms } from '@jsonforms/react';

import { materialRenderers, materialCells } from '@jsonforms/material-renderers';

import { Grid, Container, Card, CardActionArea } from '@material-ui/core';

const schema = person.schema;
const uischema = person.uischema;
const data = person.data;

const ConfigEditor = () => {
    return (
        <Container>
            <JsonForms
                schema={schema}
                uischema={uischema}
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
            />
        </Container>
    );
};

export default ConfigEditor;
