import React from 'react';
import {
    FormControl,
    MenuItem,
    Select
} from "@mui/material";
import { LOCALES } from "../../../../i18n/locales";
import FlagKZ from "../../../../assets/icons/navbar/flag_kz.svg";
import FlagRU from "../../../../assets/icons/navbar/flag_ru.svg";
import FlagTR from "../../../../assets/icons/navbar/flag_tr.svg";

const SelectLanguages = ({currentLocale, handleChange}) => {

    const languages = [
        {name: 'KZ', code: LOCALES.KAZAKH, icon: FlagKZ},
        {name: 'RU', code: LOCALES.RUSSIAN, icon: FlagRU},
        {name: 'TR', code: LOCALES.TURKISH, icon: FlagTR},
    ];

    return (
        <FormControl>
            <Select
                onChange={handleChange}
                value={currentLocale}
            >
                {languages.map(({name, code, icon}) => (
                    <MenuItem
                        key={code}
                        value={code}
                    >
                        <div>
                            <img
                                src={icon}
                                alt={`flag of ${name}`}
                            />
                            {name}
                        </div>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectLanguages;