import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import MobileDrawerList from './MobileDrawerList/MobileDrawerList';

const MobileDrawer = () => {
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    return (
        <>
            <MenuIcon onClick={toggleDrawer(true)} sx={{color: 'white'}}/>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <MobileDrawerList toggleDrawer={toggleDrawer}/>
            </Drawer>
        </>
    );
};

export default MobileDrawer;