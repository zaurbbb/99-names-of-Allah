import React from 'react';
import {FormattedMessage} from "react-intl";

import css from './Heading.module.sass'
const Heading = ({children, value}) => {
    return (
        <h1 className={css.Block}>
            <FormattedMessage id={value}/>
            {children}
        </h1>
    );
};

export default Heading;