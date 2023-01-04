import React, { useContext } from 'react';
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom';
import { routes } from './router/routes';

const AppRouter = () => {

    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.path}
                    element={route.component}
                    path={route.path}
                />
            )}

            <Route
                path='*'
                element={<Navigate to='/unavailable' replace/>}
            />
        </Routes>
    );
};

export default AppRouter;