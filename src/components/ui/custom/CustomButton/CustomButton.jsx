import React from 'react';

import { FormattedMessage } from 'react-intl';

import css from './CustomButton.module.sass';

const CustomButton = ({ text, size, filled, onClick }) => {
    const filledStatus = filled ? css.Filled : css.Unfilled;
    const sizeStatus = size === 'big' ? css.BigButton : size === 'regular' ? css.RegularButton : css.SmallButton;
    return (
        <button
            onClick={onClick}
            className={`${css.Button} ${filledStatus} ${sizeStatus}`}
        >
            <FormattedMessage id={`w.${text}`} />
        </button>
    );
};

export default CustomButton;