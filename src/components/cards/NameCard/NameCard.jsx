import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import StarIcon from "../../ui/svg/StarIcon/StarIcon";
import PlayIcon from "../../ui/svg/PlayIcon/PlayIcon";

import css from './NameCard.module.sass'
import { useMosque } from "../../../hooks/useMosque";
import { BookmarksContext } from '../../../context';

const NameCard = ({ name, item, id, nameArabic, shortMeaning }) => {
    const currentMosque = useMosque(id - 1);
    const { bookmarks, setBookmarks } = useContext(BookmarksContext);

    const bookmarkName = ({ item, id }) => {
        let array = bookmarks;
        let addArray = true;

        array.forEach((item, idx) => {
            if (item === id) {
                array.splice(idx, 1);
                addArray = false;
            }
        })

        if (addArray) {
            array.push(id);
        }

        setBookmarks([...array]);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        let storage = localStorage.getItem('bookmarkItem' + (id) || null);
        if (storage === null) {
            localStorage.setItem(('bookmarkItem' + (id)), JSON.stringify(item));
        } else {
            localStorage.removeItem('bookmarkItem' + (id));
        }
    }

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