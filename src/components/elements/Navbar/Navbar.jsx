import React, {
    useContext,
    useState
} from 'react';
import {
    NavLink,
    useLocation
} from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import { WindowWidthContext } from '../../../context/windowWidth';

import { useShow } from '../../../hooks/useShow';

import SelectLanguages from './SelectLanguages/SelectLanguages';
import SearchModal from './SearchModal/SearchModal';

import css from './Navbar.module.sass';

import NavbarLogoIcon from '../../../assets/icons/navbar/navbar_logo.webp'
import NavbarSearchIcon from '../../../assets/icons/navbar/search_light.webp'

const Navbar = (props) => {
    const { isSmallDevice } = useContext(WindowWidthContext)
    const location = useLocation();
    const isBgShown = useShow(location, css.InActiveBg, css.ActiveBg);

    const isLinkActive = (navData) => {
        return navData.isActive ? css.ActiveLink : css.InActiveLink
    };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <nav className={`${css.Block} ${isBgShown}`}>
            <div className={css.FirstColumn}>
                <NavLink to='/'>
                    <img
                        src={NavbarLogoIcon}
                        alt='Site Logo'
                    />
                </NavLink>
            </div>
            <div className={css.SecondColumn}>
                <NavLink
                    to='/'
                    className={isLinkActive}
                >
                    {isSmallDevice ? <img
                            src={NavbarLogoIcon}
                            alt='Site Logo'
                        /> :
                        <FormattedMessage id='w.header_main' />
                    }
                </NavLink>

                <NavLink
                    to='/tests'
                    className={isLinkActive}
                >
                    <FormattedMessage id='w.header_test' />
                </NavLink>

                <NavLink
                    to='/about'
                    className={isLinkActive}
                >
                    <FormattedMessage id='w.header_about' />
                </NavLink>

                {isSmallDevice &&
                    <NavLink
                        to='/allNames'
                        className={isLinkActive}
                    >
                        <FormattedMessage id='w.header_allNames' />
                    </NavLink>
                }
            </div>
            <div className={css.ThirdColumn}>
                <img
                    src={NavbarSearchIcon}
                    alt='NavbarSearchIcon'
                    onClick={handleOpen}
                />

                <SelectLanguages {...props} />
            </div>

            <SearchModal
                open={open}
                handleClose={handleClose}
            />
        </nav>
    );
};

export default Navbar;