import { useContext } from 'react';
import { messages } from '../i18n/messages';
import { LanguageContext } from '../context/language';

export const useNamesCollection = (startIndex, endIndex) => {
    const { currentLocale } = useContext(LanguageContext);
    const namesArr = messages[currentLocale].n;
    return endIndex ? namesArr.slice(startIndex, endIndex) : namesArr;
};