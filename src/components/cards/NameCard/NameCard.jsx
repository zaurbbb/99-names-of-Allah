import React from 'react';
import {Link} from "react-router-dom";

import StarIcon from "../../ui/StarIcon/StarIcon";
import PlayIcon from "../../ui/PlayIcon/PlayIcon";

import css from './NameCard.module.sass'
import {useMosque} from "../../../hooks/useMosque";

const NameCard = ({name, id, nameArabic, shortMeaning}) => {
    const currentMosque = useMosque(id-1)

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
                    <StarIcon filled={true}/>
                </div>
            </div>
            <div className={css.MiddleElement}>
                {currentMosque}
            </div>

            <Link to={`/name/${id}`} className={css.LowerElement}>
                <div>
                    <h4>
                        {name}
                    </h4>

                    <h5>
                        {shortMeaning}
                    </h5>
                </div>
                <div>
                    <PlayIcon/>
                </div>
            </Link>


        </div>
    );
};

export default NameCard;