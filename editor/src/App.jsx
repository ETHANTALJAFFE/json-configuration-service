import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Projects } from './components/Projects';
import { Brightness7Sharp, Brightness4Sharp } from '@material-ui/icons';
import { AppBar, Paper, Toolbar, Typography, Switch, IconButton, Tooltip } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';
import { ThemedContainer, ThemedPageBackground } from './components/themed';

function App() {
    const [shouldUseDarkTheme, setShouldUseDarkTheme] = useState(false);

    const theme = createMuiTheme(shouldUseDarkTheme ? darkTheme : lightTheme);
    const toggleTheme = () => setShouldUseDarkTheme(!shouldUseDarkTheme);
    const ThemeToggleIcon = () => (shouldUseDarkTheme ? <Brightness7Sharp /> : <Brightness4Sharp />);
    const themeToggleText = shouldUseDarkTheme ? 'Toggle Light Mode' : 'Toggle Dark Mode';
    return (
        <ThemeProvider theme={theme}>
            <ThemedPageBackground fixed elevation={0} square>
                <AppBar position="static">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h6">JSON Configuration Service</Typography>
                        <div>
                            <Tooltip title={themeToggleText}>
                                <IconButton onClick={toggleTheme} color={'inherit'}>
                                    <ThemeToggleIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Toolbar>
                </AppBar>
                <Projects />
            </ThemedPageBackground>
        </ThemeProvider>
    );
}

export default App;
