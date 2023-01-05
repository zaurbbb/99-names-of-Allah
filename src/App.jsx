import React, {
    useState,
    Suspense,
    useEffect
} from 'react';
import {
    IntlProvider,
    ReactIntlErrorCode
} from 'react-intl';

import { flattenMessages } from './helpers/flattenMessages';
import { messages } from './i18n/messages';
import { LOCALES } from './i18n/locales';
import {
    BookmarksContext,
    LanguageContext
} from './context';
import '@formatjs/intl-numberformat/locale-data/ru';
import { ScrollToTop } from './helpers/scrollToTop';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import AboutApp from './components/elements/AboutApp/AboutApp';
import SectionLoader from "./components/ui/loaders/SectionLoader/SectionLoader";

import './styles/swiper.sass';
import './styles/app.sass';
import { useBookmarks } from './hooks/useBookmarks';

const AppRouter = React.lazy(() => import('./AppRouter.jsx'));

function App() {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale());
    const [bookmarks, setBookmarks] = useState([]);
    const getBookmarks = useBookmarks();
    // localStorage.clear();
    useEffect(() => {
        if (getBookmarks !== 0) {
            setBookmarks([...getBookmarks])
        }
    }, []);


    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value);
        localStorage.setItem('locale', value);
    };

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.KAZAKH
    }

    function onError(e) {
        if (e.code === ReactIntlErrorCode.MISSING_DATA) {
            return
        }
        console.error(e)
    }

    return (
        <LanguageContext.Provider value={{ currentLocale }}>
            <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
                <IntlProvider
                    messages={flattenMessages(messages[currentLocale])}
                    locale={'kzNames-KZ'}
                    defaultLocale={'ru-RU'}
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
                    <ScrollToTop />

                </IntlProvider>
            </BookmarksContext.Provider>
        </LanguageContext.Provider>
    );
}

export default App;
