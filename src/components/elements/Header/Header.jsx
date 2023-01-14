import React from 'react';
import { useLocation } from 'react-router-dom';

import { useShow } from '../../../hooks/useShow';

import Navbar from '../Navbar/Navbar';
import HeaderContent from './HeaderContent';

import css from './Header.module.sass';

const Header = (props) => {
    const location = useLocation();
    const isBgShown = useShow(location, css.ActiveBg, css.InactiveBg);
    const isHeaderContentShown = useShow(location, <HeaderContent />, '');

    return (
        <header className={`${css.Block} ${isBgShown}`}>
            <Navbar {...props} />
            {isHeaderContentShown}
        </header>
    );
};

export default Header;