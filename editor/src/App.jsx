import React, { useState } from 'react';
import Logo from './res/img/configurinator-logo.png';
import './App.css';
import { Projects } from './components/Projects';
import { Brightness7Sharp, Brightness4Sharp, Code as CodeIcon } from '@material-ui/icons';
import { AppBar, Paper, Toolbar, Typography, Switch, IconButton, Tooltip } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import lightTheme from './themes/light.json';
import darkTheme from './themes/dark.json';
import { ThemedContainer, ThemedPageBackground } from './components/themed';
import ConfigEditor from './components/config-editor';

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
                        <img src={Logo} height={100} />
                        <div>
                            <Tooltip title={themeToggleText}>
                                <IconButton onClick={toggleTheme} color={'inherit'}>
                                    <ThemeToggleIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </Toolbar>
                </AppBar>
                <ConfigEditor />
            </ThemedPageBackground>
        </ThemeProvider>
    );
}

export default App;
