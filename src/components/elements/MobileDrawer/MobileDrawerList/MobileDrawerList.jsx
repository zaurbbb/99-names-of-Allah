import React from 'react';

import NavList from '../../Navbar/NavList/NavList';

import css from './MobileDrawerList.module.sass';

const MobileDrawerList = ({toggleDrawer}) => {
    return (
        <div
            className={css.Block}
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <NavList />
        </div>
    );
};

export default MobileDrawerList;