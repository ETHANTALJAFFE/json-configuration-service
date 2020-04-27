import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Projects } from './components/Projects';
import { AppBar, Paper, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';
import { ThemedContainer, ThemedPageBackground } from './components/themed';

function App() {
    const theme = createMuiTheme(darkTheme);
    return (
        <ThemeProvider theme={theme}>
            <ThemedPageBackground fixed elevation={0} square>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">JSON Configuration Service</Typography>
                    </Toolbar>
                </AppBar>
                <Projects />
            </ThemedPageBackground>
        </ThemeProvider>
    );
}

export default App;
