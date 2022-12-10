import React from 'react';

import {FormattedMessage} from "react-intl";

import DownloadButton from "./downloadButton/DownloadButton";

import css from './AboutApp.module.sass';
import AppDemo from '../../../assets/icons/aboutApp/appDemo.svg'
import GooglePlayLogo from '../../../assets/icons/aboutApp/googlePlay.webp'
import AppStoreLogo from '../../../assets/icons/aboutApp/appStore.webp'


const AboutApp = () => {
    return (
        <article className={css.Block}>
            <div className={css.TextElement}>
                <h1>
                    <FormattedMessage id='w.about_app_title'/>
                </h1>
                <h3>
                    <FormattedMessage id='w.about_app_subtitle'/>
                </h3>
                <br/>
                <div className={css.ButtonsGroup}>
                    <DownloadButton
                        title="Google Play"
                        logo={GooglePlayLogo}
                    />
                    <DownloadButton
                        title="App Store"
                        logo={AppStoreLogo}
                    />
                </div>
            </div>
            <div className={css.ImgElement}>
                <img src={AppDemo} alt={"demonstration of app"}/>
            </div>
        </article>
    );
};

export default AboutApp;