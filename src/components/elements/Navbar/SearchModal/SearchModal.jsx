import React from 'react';

import {
    Box,
    Modal
} from '@mui/material';

import SearchBar from './SearchBar/SearchBar';

import css from '../Navbar.module.sass';

const SearchModal = ({open, handleClose}) => {

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
        >
            <Box className={css.ModalContainer}>
                <SearchBar />
            </Box>
        </Modal>
    );
};

export default SearchModal;