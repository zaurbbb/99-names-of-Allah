import React from 'react';
import { FormattedMessage } from "react-intl";

import css from './Heading.module.sass'

const Heading = ({ children, value }) => {
    return (
        <div className={css.Block}>
            <h1>
                <FormattedMessage id={value} />
            </h1>
            {children}
        </div>
    );
};

export default Heading;