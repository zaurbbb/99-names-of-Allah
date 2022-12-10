import React from 'react';

import css from "./DownloadButton.module.sass"
import { FormattedMessage } from "react-intl";


const DownloadButton = ({ title, logo }) => {
    return (
        <button className={css.button}>
            <div>
                <img
                    src={logo}
                    alt="logo of store"
                />
            </div>
            <div>
                <span>
                    <FormattedMessage id='w.about_app_download' />
                </span>
                <span>{title}</span>
            </div>
        </button>
    );
};

export default DownloadButton;