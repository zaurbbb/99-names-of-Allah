import React from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import css from './Footer.module.sass';

import FooterLogo from '../../../assets/icons/footer/footer_logo.svg';
import IconFacebook from '../../../assets/icons/footer/social_facebook.svg';
import IconTwitter from '../../../assets/icons/footer/social_twitter.svg';
import IconInstagram from '../../../assets/icons/footer/social_instagram.svg';

const Footer = () => {
    return (
        <footer className={css.Block}>
            <div>
                <ul className={css.MainColumn}>
                    <li>
                        <img
                            src={FooterLogo}
                            alt='Footer Logo'
                        />
                        <FormattedMessage id='w.app_name' />
                    </li>
                    <li>
                        <FormattedMessage id='w.footer_title' />
                    </li>
                    <li>
                        <a href='https://ru-ru.facebook.com/'>
                            <img
                                src={IconFacebook}
                                alt='Facebook Icon'
                            />
                        </a>
                        <a href='https://twitter.com/'>
                            <img
                                src={IconTwitter}
                                alt='Twitter Icon'
                            />
                        </a>
                        <a href='https://www.instagram.com/'>
                            <img
                                src={IconInstagram}
                                alt='Instagram Icon'
                            />
                        </a>
                    </li>
                </ul>
                <ul className={css.SecondaryColumn}>
                    <li>
                        <FormattedMessage id='w.footer_help' />
                    </li>
                    <li>
                        <Link to='/unavailable'>
                            <FormattedMessage id='w.footer_policy' />
                        </Link>
                    </li>
                    <li>
                        <Link to='/unavailable'>
                            FeedBack
                        </Link>
                    </li>
                    <li>
                        <Link to='/unavailable'>
                            <FormattedMessage id='w.footer_contact' />
                        </Link>
                    </li>
                </ul>
                <ul className={css.SecondaryColumn}>
                    <li>
                        <FormattedMessage id='w.footer_apps' />
                    </li>
                    <li>
                        <a href='https://play.google.com/store/apps/details?id=com.alimapps.allahnames'>
                            <FormattedMessage id='w.footer_android' />
                        </a>
                    </li>
                    <li>
                        <a href='https://apps.apple.com/app/id1273554579'>
                            <FormattedMessage id='w.footer_ios' />
                        </a>
                    </li>
                    <br />
                </ul>
            </div>
            <div>
                ©Allanyn99esimi. <FormattedMessage id='w.footer_subtitle' />
            </div>
        </footer>
    );
};

export default Footer;