import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import StarIcon from "../../ui/svg/StarIcon/StarIcon";
import PlayIcon from "../../ui/svg/PlayIcon/PlayIcon";

import css from './NameCard.module.sass'
import { useMosque } from "../../../hooks/useMosque";
import { useBookmarkName } from '../../../hooks/useBookmarkName';
import { BookmarksContext } from '../../../context';

const NameCard = ({ name, item, id, nameArabic, shortMeaning }) => {
    const currentMosque = useMosque(id - 1);

    const { bookmarks } = useContext(BookmarksContext);
    const { bookmarkName } = useBookmarkName({ item, id });

    return (
        <div className={css.Block}>
            <div className={css.UpperElement}>
                <div>
                    {id}
                </div>
                <div>
                    {nameArabic}
                </div>
                <div>
                    <StarIcon
                        filled={!!bookmarks.includes(id)}
                        onClick={() => bookmarkName({ item, id })}
                    />
                </div>
            </div>
            <div className={css.MiddleElement}>
                {currentMosque}
            </div>

            <Link
                to={`/name/${id}`}
                className={css.LowerElement}
            >
                <div>
                    <h4>
                        {name}
                    </h4>

                    <h5>
                        {shortMeaning}
                    </h5>
                </div>
                <div>
                    <PlayIcon />
                </div>
            </Link>


        </div>
    );
};

export default NameCard;