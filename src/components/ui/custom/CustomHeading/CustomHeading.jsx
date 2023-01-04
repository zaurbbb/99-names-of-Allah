import React from 'react';
import {
    FormattedMessage,
    useIntl
} from "react-intl";

import css from './CustomHeading.module.sass'

const CustomHeading = ({ children, value }) => {
    const intl = useIntl();
    return (
        <div className={css.Block}>
            <h1>
                <FormattedMessage
                    id={value}
                    defaultMessage={value}
                />
            </h1>
            {children}
        </div>
    );
};

export default CustomHeading;