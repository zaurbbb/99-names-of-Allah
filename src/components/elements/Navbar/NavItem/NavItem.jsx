import React from 'react';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import css from './NavItem.module.sass';

const NavItem = ({ obj }) => {
    function isLinkActive(navData) {
        return navData.isActive ? `${css.ActiveLink} ${css.Link}` : `${css.InactiveLink} ${css.Link}`;
    }

    return (
        <>
            <NavLink
                to={obj.route}
                className={isLinkActive}
            >
                <FormattedMessage id={obj.value} />
            </NavLink>
        </>
    );
};

export default NavItem;