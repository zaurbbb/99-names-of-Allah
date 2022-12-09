import React from 'react';

import {LOCALES} from "../../../i18n/locales";
import {FormattedMessage} from "react-intl";

const Header = ({currentLocale, handleChange}) => {
    const languages = [
        {name: 'KZ', code: LOCALES.KAZAKH},
        {name: 'RU', code: LOCALES.RUSSIAN},
        {name: 'TR', code: LOCALES.TURKISH},
    ];

    return (
        <header>
            <div className="switcher">
                Languages
                <select onChange={handleChange} value={currentLocale}>
                    {languages.map(({ name, code }) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
            <h1>
                <FormattedMessage id='words.name'/>
            </h1>
        </header>
    );
};

export default Header;