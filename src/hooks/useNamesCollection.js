import { messages } from "../i18n/messages";
import { useContext } from "react";
import { LanguageContext } from "../context";

export const useNamesCollection = () => {
    const { currentLocale } = useContext(LanguageContext);
    return messages[currentLocale].n;
};