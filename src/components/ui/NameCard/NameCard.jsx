import React from 'react';
import {Link} from "react-router-dom";

import Star from "../Star/Star";
import Play from "../Play/Play";

import css from './NameCard.module.sass'
import {useMosque} from "../../../hooks/useMosque";

const NameCard = ({name, id, nameArabic, shortMeaning}) => {
    const currentMosque = useMosque(id)

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
                    <Star filled={true}/>
                </div>
            </div>
            <div className={css.MiddleElement}>
                <img src={currentMosque} alt=""/>
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
                    <Play/>
                </div>
            </Link>


        </div>
    );
};

export default NameCard;