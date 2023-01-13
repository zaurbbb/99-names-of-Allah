import {
    createContext,
    useState
} from 'react';

export const WindowWidthContext = createContext(0);

export const WindowWidthProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isSmallDevice = windowWidth <= 576;

    return <WindowWidthContext.Provider value={{ setWindowWidth, isSmallDevice }}>
        {children}
    </WindowWidthContext.Provider>
}