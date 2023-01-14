import React, { useContext } from 'react';

import { WindowWidthContext } from '../../../../context/windowWidth';

import { navList } from '../../../../data/navList';

import NavItem from '../NavItem/NavItem';

const NavList = () => {
    const { isSmallDevice } = useContext(WindowWidthContext);

    return navList.map(elem => {
        return !isSmallDevice && elem.id === 4 ? undefined : <NavItem
            obj={elem}
            key={elem.id}
        />;
    });
};

export default NavList;