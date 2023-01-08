import React from 'react';

import css from './ShareIcon.module.sass';

import LightShareButton from './lightShareButton.svg';
import DarkShareButton from './darkShareButton.svg';

const ShareIcon = ({ onClick, color }) => {
    let icon;
    switch (color) {
        case 'light': {
            icon = LightShareButton;
            break;
        }
        case 'dark': {
            icon = DarkShareButton;
            break;
        }
        default: {
            icon = LightShareButton;
        }
    }
    return (
        <img
            onClick={onClick}
            src={icon}
            alt='icon'
            className={css.ShareIcon}
            style={{cursor: 'pointer'}}
        />
    );
};

export default ShareIcon;