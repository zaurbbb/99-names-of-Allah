import React, {
    useState,
    Suspense
} from 'react';
import { IntlProvider } from 'react-intl';

import { flattenMessages } from './helpers/flattenMessages';
import { messages } from './i18n/messages';
import { LOCALES } from './i18n/locales';
import { LanguageContext } from './context';
import { ScrollToTop } from './helpers/scrollToTop';

import Header from './components/elements/Header/Header';
import Footer from './components/elements/Footer/Footer';
import AboutApp from './components/elements/AboutApp/AboutApp';
import SectionLoader from "./components/ui/loaders/SectionLoader/SectionLoader";

import './styles/swiper.sass';
import './styles/app.sass';

const AppRouter = React.lazy(() => import('./AppRouter.jsx'));

function App() {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

    const handleChange = ({ target: { value } }) => {
        setCurrentLocale(value);
        localStorage.setItem('locale', value);
    };

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.KAZAKH
    }

    return (
        <LanguageContext.Provider
            value={{
                currentLocale
            }}
        >
            <IntlProvider
                messages={flattenMessages(messages[currentLocale])}
                locale={currentLocale}
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
        </LanguageContext.Provider>
    );
}

export default App;
