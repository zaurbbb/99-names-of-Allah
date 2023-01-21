import React, {
    useContext,
    useState
} from 'react';
import {
    NavLink,
    useLocation
} from 'react-router-dom';

import { WindowWidthContext } from '../../../context/windowWidth';

import { useShow } from '../../../hooks/useShow';

import SelectLanguages from './SelectLanguages/SelectLanguages';
import SearchModal from './SearchModal/SearchModal';
import MobileDrawer from '../MobileDrawer/MobileDrawer';
import NavList from '../../lists/NavList/NavList';

import css from './Navbar.module.sass';

import NavbarLogoIcon from '../../../assets/icons/navbar/navbar_logo.webp'
import NavbarSearchIcon from '../../../assets/icons/navbar/search_light.webp'

const Navbar = (props) => {
    const { isTabletDevice } = useContext(WindowWidthContext)
    const location = useLocation();
    const isBgShown = useShow(location, css.InactiveBg, css.ActiveBg);

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
                {isTabletDevice ? <MobileDrawer /> : <NavList />}
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