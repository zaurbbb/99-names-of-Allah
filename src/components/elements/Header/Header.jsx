import React from 'react';
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import HeaderContent from "./HeaderContent";
import { useShow } from "../../../hooks/useShow";

import css from './Header.module.sass';

const Header = (props) => {
    const location = useLocation();
    const isBgShown = useShow(location, css.ActiveBg, css.InActiveBg);
    const isHeaderContentShown = useShow(location, <HeaderContent />, '');

    return (
        <header className={`${css.Block} ${isBgShown}`}>
            <Navbar {...props} />
            {isHeaderContentShown}
        </header>
    );
};

export default Header;