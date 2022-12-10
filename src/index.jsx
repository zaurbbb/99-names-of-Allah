import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { theme } from './themes/theme';

import App from './App';

import './styles/index.css';
import './styles/reset.css';
import { ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);
