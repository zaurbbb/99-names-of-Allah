import React, { useContext } from 'react';

import { WindowWidthContext } from '../../../../context/windowWidth';
import { BookmarksContext } from '../../../../context/bookmarks';

import { navList } from '../../../../data/navList';

import NavItem from '../NavItem/NavItem';

const NavList = () => {
    const { isTabletDevice } = useContext(WindowWidthContext);
    const { bookmarks } = useContext(BookmarksContext);

    return navList.map(elem => {
        const shouldAllNamesItemBeShowed = !isTabletDevice && elem.id === 4;
        const shouldBookmarksBeShowed = elem.id === 5 && bookmarks.length === 0;
        console.log(shouldBookmarksBeShowed);
        return shouldAllNamesItemBeShowed || shouldBookmarksBeShowed ? undefined : <NavItem
            obj={elem}
            key={elem.id}
        />;
    });
};

export default NavList;