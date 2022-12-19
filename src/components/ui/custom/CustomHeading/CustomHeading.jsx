import React from 'react';
import { FormattedMessage } from "react-intl";

import css from './CustomHeading.sass'

const CustomHeading = ({ children, value }) => {
    return (
        <div className={css.Block}>
            <h1>
                <FormattedMessage id={value} />
            </h1>
            {children}
        </div>
    );
};

export default CustomHeading;