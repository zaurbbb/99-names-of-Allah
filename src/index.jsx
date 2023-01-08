import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import { theme } from './themes/theme';

import AppLoader from './components/ui/loaders/AppLoader/AppLoader';

import './styles/index.css';
import './styles/reset.css';

import { LanguageProvider } from './context/language';
import { BookmarksProvider } from './context/bookmarks';
import { WindowWidthProvider } from './context/windowWidth';
import { SnackbarProvider } from './context/snackbar';

const App = React.lazy(() => import('./App.jsx'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <ThemeProvider theme={theme}>
            <LanguageProvider>
                <BookmarksProvider>
                    <WindowWidthProvider>
                        <SnackbarProvider>
                            <Suspense fallback={<AppLoader />}>
                                <App />
                            </Suspense>
                        </SnackbarProvider>
                    </WindowWidthProvider>
                </BookmarksProvider>
            </LanguageProvider>
        </ThemeProvider>
    </HashRouter>
);
