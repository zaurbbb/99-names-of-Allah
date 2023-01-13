import React from 'react';

import css from './PlayIcon.module.sass';

import PlayBtn from './playButton.svg';

const PlayIcon = ({ reverse }) => {
    return (
        <img
            src={PlayBtn}
            className={reverse && css.ReverseImg }
            alt='icon'
        />
    );
};

export default PlayIcon;