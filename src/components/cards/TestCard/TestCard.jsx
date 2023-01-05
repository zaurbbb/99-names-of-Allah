import React from 'react';

import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import { useMosque } from "../../../hooks/useMosque";

import CustomButton from "../../ui/custom/CustomButton/CustomButton";

import css from "./TestCard.module.css";

const TestCard = ({value, id}) => {
    const currentMosque = useMosque(id-1);
    return (
        <div className={css.Card}>
            <div>
                <h1>
                    {value}
                </h1>
                <FormattedMessage id='w.the_most_beautiful_names_text' />
            </div>
            <div>
                {currentMosque}
            </div>

            <Link to={`/test/${id}`}>
                <CustomButton
                    text='test_page_start_test'
                    size='small'
                    filled={true}
                />
            </Link>
        </div>
    );
};

export default TestCard;