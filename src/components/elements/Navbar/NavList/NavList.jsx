import React, { useContext } from 'react';

import { WindowWidthContext } from '../../../../context/windowWidth';

import { navList } from '../../../../data/navList';

import NavItem from '../NavItem/NavItem';

const NavList = () => {
    const { isTabletDevice } = useContext(WindowWidthContext);


    return navList.map(elem => {
        const shouldItemBeShowed = !isTabletDevice && elem.id === 5
        return shouldItemBeShowed ? undefined : <NavItem
            obj={elem}
            key={elem.id}
        />;
    });
};

export default NavList;