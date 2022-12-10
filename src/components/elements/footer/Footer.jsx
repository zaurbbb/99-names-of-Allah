import React from 'react';

import {FormattedMessage} from "react-intl";

import css from './Footer.module.sass';
import FooterLogo from '../../../assets/icons/footer/logo.svg';
import IconFacebook from '../../../assets/icons/footer/social_facebook.svg';
import IconTwitter from '../../../assets/icons/footer/social_twitter.svg';
import IconInstagram from '../../../assets/icons/footer/social_instagram.svg';

const Footer = () => {
    return (
        <footer className={css.block}>
            <div className={css.upperElement}>
                <ul className={css.MainColumn}>
                    <li>
                        <img src={FooterLogo} alt="Footer Logo"/>
                        <FormattedMessage id='w.app_name'/>
                    </li>
                    <li>
                        <FormattedMessage id='w.footer_title'/>
                    </li>
                    <li>
                        <a href="https://github.com">
                            <img src={IconFacebook} alt="Facebook Icon"/>
                        </a>
                        <a href="https://github.com">
                            <img src={IconTwitter} alt="Twitter Icon"/>
                        </a>
                        <a href="https://github.com">
                            <img src={IconInstagram} alt="Instagram Icon"/>
                        </a>
                    </li>
                </ul>
                <ul className={css.SecondaryColumn}>
                    <li>
                        <FormattedMessage id='w.footer_help'/>
                    </li>
                    <li>
                        <a href="https://github.com">
                            <FormattedMessage id='w.footer_policy'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com">
                            FeedBack
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com">
                            <FormattedMessage id='w.footer_contact'/>
                        </a>
                    </li>
                </ul>
                <ul className={css.SecondaryColumn}>
                    <li>
                        <FormattedMessage id='w.footer_apps'/>
                    </li>
                    <li>
                        <a href="https://github.com">
                            <FormattedMessage id='w.footer_android'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com">
                            <FormattedMessage id='w.footer_ios'/>
                        </a>
                    </li>
                    <br/>
                </ul>
            </div>
            <div className={css.lowerElement}>
                ©Allanyn99esimi. <FormattedMessage id='w.footer_subtitle'/>
            </div>
        </footer>
    );
};

export default Footer;