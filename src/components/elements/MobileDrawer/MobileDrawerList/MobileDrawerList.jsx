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
            {/*{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
            {/*    <ListItem key={text} disablePadding>*/}
            {/*        <ListItemButton>*/}
            {/*            <ListItemIcon>*/}
            {/*                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
            {/*            </ListItemIcon>*/}
            {/*            <ListItemText primary={text} />*/}
            {/*        </ListItemButton>*/}
            {/*    </ListItem>*/}
            {/*))}*/}
        </div>
    );
};

export default MobileDrawerList;