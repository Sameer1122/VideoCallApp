import React from 'react';
import ReactDOM from 'react-dom';
import {createTheme} from '@mui/material';
import {ThemeProvider} from '@mui/styles';
import App from './App';
import { ContextProvider } from './context';
const theme = createTheme()
ReactDOM.render(
  <ContextProvider>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </ContextProvider>,
  document.getElementById('root'),
);