import { useContext } from 'react';
import { messages } from '../i18n/messages';
import { LanguageContext } from '../context/language';

export const useNamesCollection = (numberOfNames) => {
    const { currentLocale } = useContext(LanguageContext);
    const namesArr = messages[currentLocale].n;
    return numberOfNames ? namesArr.slice(0, numberOfNames) : namesArr;
};