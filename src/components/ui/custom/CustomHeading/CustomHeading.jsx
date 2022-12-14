import React from 'react';

import { FormattedMessage } from 'react-intl';

import css from './CustomHeading.module.sass';

const CustomHeading = ({ children, value, before }) => {
    return (
        <div className={css.Block}>
            <h1>
                {before} <FormattedMessage
                    id={value}
                    defaultMessage={value}
                />
            </h1>
            {children}
        </div>
    );
};

export default CustomHeading;