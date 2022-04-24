import React from 'react';
import { ApplicationProvider } from './context/AppContext';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles.js';
import Routing from './routes';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ApplicationProvider>
                <Routing/> 
            </ApplicationProvider>
        </ThemeProvider>
    )
}

