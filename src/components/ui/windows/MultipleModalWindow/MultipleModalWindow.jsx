import React from 'react';

import {
    Box,
    Modal
} from '@mui/material';

import css from './MultipleModalWindow.module.sass';

const MultipleModalWindow = (props) => {
    return (
        <Modal
            {...props}
            // aria-labelledby="modal-modal-title"
            // aria-describedby="modal-modal-description"
        >
            <Box className={css.ModalContainer}>
                {props.children}
            </Box>
        </Modal>
    );
};

export default MultipleModalWindow;