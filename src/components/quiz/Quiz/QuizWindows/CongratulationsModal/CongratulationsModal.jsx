import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';


import { QuizContext } from '../../../../../context/quiz';

import ModalWindow from '../../../../ui/windows/ModalWindow/ModalWindow';
import CustomButton from '../../../../ui/custom/CustomButton/CustomButton';

import css from './CongratulationsModal.module.sass';

const CongratulationsModal = ({ open, onClose, openResults }) => {
    const [quizState] = useContext(QuizContext);
    const navigate = useNavigate();

    function handleCloseModal() {
        onClose();
        navigate('/tests');
    }

    function handleOpenAnotherModal() {
        onClose();
        openResults();
    }

    return (
        <ModalWindow
            open={open}
            onClose={onClose}
        >
            <Box className={css.ModalContent}>
                <h2>
                    <FormattedMessage id='w.test_ending_mashallah' />
                </h2>
                <h4>
                    <FormattedMessage id='w.test_ending_answers_number' />
                    <span>
                            {quizState.correctAnswersCount}
                        </span>
                </h4>
                <div onClick={handleCloseModal}>
                    <CustomButton
                        text='test_ending_alhamdulilah'
                        size='small'
                        filled={true}
                    />
                </div>
                <div
                    onClick={handleOpenAnotherModal}
                >
                    <h5>
                        <FormattedMessage id='w.test_ending_check_answers' />
                    </h5>
                </div>
            </Box>
        </ModalWindow>
    );
};

export default CongratulationsModal;