import { styled } from '@material-ui/core/styles';
import { Card, Container, Paper } from '@material-ui/core';

const ThemedCard = styled(Card)(({ theme }) => {
    console.log(theme);
    return { background: theme.palette.background.paper };
});

const ThemedContainer = styled(Container)(({ theme }) => {
    console.log(theme);
    return { background: theme.palette.background.level1 };
});

const ThemedPageBackground = styled(Paper)(({ theme }) => {
    console.log(theme);
    return { background: theme.palette.background.level1, height: '100vh' };
});
export { ThemedCard, ThemedContainer, ThemedPageBackground };
