import React from 'react';

import css from './CustomButton.module.sass';
import { FormattedMessage } from "react-intl";

const CustomButton = ({text, size, filled}) => {
    const filledStatus = filled ? css.Filled : css.Unfilled;
    const sizeStatus = size === 'big' ? css.BigButton : size === 'regular' ? css.RegularButton : css.SmallButton;
    return (
        <button className={`${css.Button} ${filledStatus} ${sizeStatus}`}>
            <FormattedMessage id={`w.${text}`} />
        </button>
    );
};

export default CustomButton;