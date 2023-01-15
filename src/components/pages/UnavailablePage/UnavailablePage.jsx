import React from 'react';

import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import CustomButton from '../../ui/custom/CustomButton/CustomButton';

import css from './UnavailablePage.module.sass'

const UnavailablePage = () => {
    return (
        <section className={css.Block}>
            <h1>
                <FormattedMessage id='w.unavailable_text' />
            </h1>
            <Link to='/'>
                <CustomButton
                    text='unavailable_subtext'
                />
            </Link>
        </section>
    );
};

export default UnavailablePage;