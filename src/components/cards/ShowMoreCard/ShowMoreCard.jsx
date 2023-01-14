import React from 'react';
import { Link } from 'react-router-dom';

import { useMosque } from '../../../hooks/useMosque';

import PlayIcon from '../../ui/svg/PlayIcon/PlayIcon';

import css from './ShowMoreCard.module.sass';

const ShowMoreCard = () => {
    const currentMosque = useMosque(4);

    return (
        <div className={css.Block}>
            <div className={css.UpperElement}>

            </div>
            <Link
                to='/allNames'
                className={css.MiddleElement}
            >
                {currentMosque}
            </Link>
            <Link
                to='/allNames'
                className={css.LowerElement}
            >
                <div>
                    <h4>
                        Смотреть все имена
                    </h4>
                </div>
                <div className={css.PlayIconDiv}>
                    <PlayIcon />
                </div>
            </Link>
        </div>
    );
};

export default ShowMoreCard;