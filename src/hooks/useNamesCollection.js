import { useContext } from 'react';
import { messages } from '../i18n/messages';
import { LanguageContext } from '../context/language';

export const useNamesCollection = () => {
    const { currentLocale } = useContext(LanguageContext);
    return messages[currentLocale].n;
};