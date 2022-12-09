import React, {useState} from 'react';

import {BrowserRouter} from "react-router-dom";
import {IntlProvider} from "react-intl";
import flatten from 'flat';

import AppRouter from "./AppRouter";
import Header from "./components/elements/header/Header";
import Footer from "./components/elements/footer/Footer";

import {messages} from "./i18n/messages";
import {LOCALES} from "./i18n/locales";

function App() {
    const [currentLocale, setCurrentLocale] = useState(getInitialLocale());

    const handleChange = ({target: {value}}) => {
        setCurrentLocale(value);
        localStorage.setItem('locale', value);
    };

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.KAZAKH
    }

    return (
        <IntlProvider
            messages={flatten(messages[currentLocale])}
            locale={currentLocale}
            defaultLocale={LOCALES.KAZAKH}
        >
            <BrowserRouter>
                <Header
                    currentLocale={currentLocale}
                    handleChange={handleChange}
                />
                <main>
                    <AppRouter/>
                </main>
                <Footer/>
            </BrowserRouter>
        </IntlProvider>
    );
}

export default App;
