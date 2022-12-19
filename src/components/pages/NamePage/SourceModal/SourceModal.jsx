import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';
import { FormattedMessage } from 'react-intl';

import BookCoverImg from '../../../ui/svg/BookCoverImg/BookCoverImg';
import ModalWindow from '../../../ui/windows/ModalWindow/ModalWindow';

import css from './SourceModal.module.sass';

const SourceModal = (props) => {

    return (
        <ModalWindow
            {...props}
        >
            <Box className={css.ModalContent}>
                <Typography
                    variant='h6'
                    color='primary.main'
                >
                    <FormattedMessage id='w.one_name_full_description' />
                </Typography>

                <Typography variant='subtitle1'>
                    <FormattedMessage id='w.modal_text' />
                </Typography>

                <BookCoverImg />

                <Typography
                    variant='subtitle1'
                    style={{ textAlign: 'center' }}
                >
                    <FormattedMessage id='w.about_page_subtitle_1' />
                    <a href='https://github.com'>fatua.kz</a>
                    <FormattedMessage id='w.about_page_subtitle_2' />
                </Typography>
            </Box>
        </ModalWindow>
    );
};

export default SourceModal;