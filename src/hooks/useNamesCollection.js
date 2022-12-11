import { useContext } from 'react';
import { LanguageContext } from '../context';
import { messages } from '../i18n/messages';

export const useNamesCollection = () => {
    const { currentLocale } = useContext(LanguageContext);
    return messages[currentLocale].n;
};