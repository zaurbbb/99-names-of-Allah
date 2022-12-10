import React from 'react';
import {useLocation} from "react-router-dom";

import Navbar from "../navbar/Navbar";
import HeaderContent from "./HeaderContent";
import {useShow} from "../../../hooks/useShow";

import css from './Header.module.sass';

const Header = (props) => {
    const location = useLocation();
    const isBgShown = useShow(location, css.activeBg, css.inActiveBg);
    const isHeaderContentShown = useShow(location, <HeaderContent/>, '');

    return (
        <header className={`${css.block} ${isBgShown}`}>
            <Navbar {...props}/>
            {isHeaderContentShown}
        </header>
    );
};

export default Header;