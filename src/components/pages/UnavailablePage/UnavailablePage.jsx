import React from 'react';
import { FormattedMessage } from "react-intl";

import css from './UnavailablePage.module.sass'
import CustomButton from "../../ui/custom/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const UnavailablePage = () => {
    return (
        <section className={css.Block}>
            <h1>
                <FormattedMessage id='w.unavailable_text' />
            </h1>
            <Link to='/'>
                <CustomButton text='unavailable_subtext'/>
            </Link>
        </section>
    );
};

export default UnavailablePage;