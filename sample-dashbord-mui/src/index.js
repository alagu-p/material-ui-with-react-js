import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider,createTheme} from "@mui/material/styles"
import App from './App';
import CssBaseline from '@mui/material/CssBaseline'

// import { theme } from './theme';

const darkTheme=createTheme({
  palette:{
    mode:'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);