import React from 'react';

import { FormattedMessage } from 'react-intl';

import BookCoverImg from '../../../ui/svg/BookCoverImg/BookCoverImg';

import css from './SourceApp.module.sass';

const SourceApp = () => {
    return (
        <div className={css.Block}>
            <h3>
                <FormattedMessage id='w.about_page_subtitle_1' />
                <a href='http://fatua.kz/'>fatua.kz</a>
                <FormattedMessage id='w.about_page_subtitle_2' />
            </h3>
            <br />
            <BookCoverImg />
        </div>
    );
};

export default SourceApp;