import React from 'react';

import { FormattedMessage } from 'react-intl';

import DownloadButton from './DownloadButton/DownloadButton';

import css from './AboutApp.module.sass';

import AppDemo from '../../../assets/images/appDemo.svg'
import GooglePlayLogo from '../../../assets/icons/aboutApp/googlePlay.webp'
import AppStoreLogo from '../../../assets/icons/aboutApp/appStore.webp'


const AboutApp = () => {
    return (
        <article className={css.Block}>
            <div className={css.TextElement}>
                <h1>
                    <FormattedMessage id='w.about_app_title' />
                </h1>
                <h3>
                    <FormattedMessage id='w.about_app_subtitle' />
                </h3>
                <br />
                <div className={css.ButtonsGroup}>
                    <a href='https://play.google.com/store/apps/details?id=com.alimapps.allahnames'>
                        <DownloadButton
                            title='Google Play'
                            logo={GooglePlayLogo}
                        />
                    </a>
                    <a href='https://apps.apple.com/app/id1273554579'>
                        <DownloadButton
                            title='App Store'
                            logo={AppStoreLogo}
                        />
                    </a>
                </div>
            </div>
            <div className={css.ImgElement}>
                <img
                    src={AppDemo}
                    alt={'demonstration of app'}
                />
            </div>
        </article>
    );
};

export default AboutApp;