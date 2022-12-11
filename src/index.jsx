import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './themes/theme';
import './styles/index.css';
import './styles/reset.css';
import Loader from "./components/ui/Loader/Loader";

const App = React.lazy(() => import('./App.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
);
