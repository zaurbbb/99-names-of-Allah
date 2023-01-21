import {
    createContext,
    useState
} from 'react';

export const WindowWidthContext = createContext(0);

export const WindowWidthProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isSmallDevice = windowWidth <= 576;
    const isTabletDevice = windowWidth <= 768;
    const isLargeDevice = windowWidth <= 992;

    return <WindowWidthContext.Provider value={{ windowWidth, setWindowWidth, isSmallDevice, isTabletDevice, isLargeDevice }}>
        {children}
    </WindowWidthContext.Provider>
}