import {
    createContext,
    useState
} from 'react';

export const SnackbarContext = createContext(0);

export const SnackbarProvider = ({ children }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };
    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpenSnackbar(false);
    };

    return <SnackbarContext.Provider value={{ openSnackbar, handleClickSnackbar, handleCloseSnackbar }}>
        {children}
    </SnackbarContext.Provider>
}