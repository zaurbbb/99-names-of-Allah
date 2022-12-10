import React, { useState } from 'react';
import { IntlProvider } from "react-intl";
import flatten from 'flat';

import { messages } from "./i18n/messages";
import { LOCALES } from "./i18n/locales";
import { LanguageContext } from "./context";

import AppRouter from "./AppRouter";
import Header from "./components/elements/Header/Header";
import Footer from "./components/elements/Footer/Footer";
import AboutApp from "./components/elements/AboutApp/AboutApp";

import './styles/swiper.sass';
import './styles/app.sass';

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
                messages={flatten(messages[currentLocale])}
                locale={currentLocale}
                defaultLocale={LOCALES.KAZAKH}
            >
                <Header
                    currentLocale={currentLocale}
                    handleChange={handleChange}
                />
                <main className='container'>
                    <AppRouter />
                    <AboutApp />
                </main>
                <Footer />
            </IntlProvider>
        </LanguageContext.Provider>
    );
}

export default App;
