import React from 'react';
import {
    Box,
    Modal
} from "@mui/material";
import css from "../Navbar.module.sass";
import { FormattedMessage } from "react-intl";
import SearchBar from "./searchBar/SearchBar";

const SearchModal = ({open, handleClose}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

        >
            <Box className={css.ModalContainer}>
                <SearchBar
                    placeholder={<FormattedMessage id='w.search_input' />}
                />
            </Box>
        </Modal>
    );
};

export default SearchModal;