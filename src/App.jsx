import React, {useState} from 'react';
import {IntlProvider} from "react-intl";
import flatten from 'flat';

import {messages} from "./i18n/messages";
import {LOCALES} from "./i18n/locales";

import AppRouter from "./AppRouter";
import Header from "./components/elements/header/Header";
import Footer from "./components/elements/footer/Footer";
import AboutApp from "./components/elements/aboutApp/AboutApp";


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
            <Header
                currentLocale={currentLocale}
                handleChange={handleChange}
            />
            <main>
                <AppRouter/>
                <AboutApp/>
            </main>
            <Footer/>
        </IntlProvider>
    );
}

export default App;
