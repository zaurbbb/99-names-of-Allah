import React from 'react';

import css from "./SourceApp.module.sass"

import BookCover from "../../../../assets/images/bookCover.webp"
import { FormattedMessage } from "react-intl";

const SourceApp = () => {
    return (
        <div className={css.Block}>
            <h3>
                <FormattedMessage id='w.about_page_subtitle_1' />
                <a href="http://fatua.kz/">fatua.kz</a>
                <FormattedMessage id='w.about_page_subtitle_2' />
            </h3>
            <br />
            <img
                src={BookCover}
                alt="view of the book"
            />
        </div>
    );
};

export default SourceApp;