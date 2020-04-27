import { styled } from '@material-ui/core/styles';
import { Card, Container, Paper, Button } from '@material-ui/core';

const ThemedCard = styled(Card)(({ theme }) => {
    console.log(theme);
    return { background: theme.palette.background.paper };
});

const ThemedContainer = styled(Container)(({ theme }) => {
    console.log(theme);
    return { background: theme.palette.background.level1 };
});

const ThemedPageBackground = styled(Paper)(({ theme }) => {
    return { background: theme.palette.background.level1, height: '100vh' };
});

const ThemedButton = styled(Button)(({ theme }) => {
    return { background: theme.palette.background.default };
});
export { ThemedCard, ThemedContainer, ThemedPageBackground, ThemedButton };
