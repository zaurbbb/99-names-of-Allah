import {
    createContext,
    useMemo,
    useState
} from 'react';
import { LOCALES } from '../i18n/locales';

export const LanguageContext = createContext('ru-RU');

export const LanguageProvider = ({ children }) => {
    const [currentLocale, setCurrentLocale] = useState(useMemo(() => getInitialLocale(), []));

    function getInitialLocale() {
        const savedLocale = localStorage.getItem('locale')
        return savedLocale || LOCALES.KAZAKH
    }

    return <LanguageContext.Provider value={{ currentLocale, setCurrentLocale }}>
        {children}
    </LanguageContext.Provider>
}