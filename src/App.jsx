import React, {
    Suspense,
    useContext,
    useEffect
} from 'react';
import { useLocation } from 'react-router-dom';

import {
    IntlProvider,
    ReactIntlErrorCode
} from 'react-intl';

import { useBookmarks } from './hooks/useBookmarks';

import { BookmarksContext } from './context/bookmarks';
import { LanguageContext } from './context/language';
import { WindowWidthContext } from './context/windowWidth';

import { messages } from './i18n/messages';
import { flattenMessages } from './helpers/flattenMessages';
import '@formatjs/intl-numberformat/locale-data/ru';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import AboutApp from './components/elements/AboutApp/AboutApp';
import SectionLoader from './components/ui/loaders/SectionLoader/SectionLoader';

const AppRouter = React.lazy(() => import('./AppRouter.jsx'));

function App() {
    const routePath = useLocation();

    const { currentLocale, setCurrentLocale } = useContext(LanguageContext);
    const { setBookmarks } = useContext(BookmarksContext);
    const { windowWidth, setWindowWidth } = useContext(WindowWidthContext);

    const getBookmarks = useBookmarks();

    // updates bookmarks
    useEffect(() => {
        if (getBookmarks) {
            setBookmarks([...getBookmarks])
        }
    }, []);

    // scrolls to the top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [routePath]);

    // updates windowWidth var in context
    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth, setWindowWidth]);

    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value);
        localStorage.setItem('locale', value);
    };

    function onError(e) {
        if (e.code === ReactIntlErrorCode.MISSING_DATA) return
        console.error(e)
    }

    return (
        <IntlProvider
            messages={flattenMessages(messages[currentLocale])}
            locale={'kz-KZ'}
            defaultLocale={'kz-KZ'}
            onError={onError}
        >
            <Header
                currentLocale={currentLocale}
                handleChange={handleChange}
            />

            <main className='container'>
                <Suspense fallback={<SectionLoader />}>
                    <AppRouter />
                </Suspense>
                <AboutApp />
            </main>

            <Footer />
        </IntlProvider>
    );
}

export default App;