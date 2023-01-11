import React, { useContext } from 'react';
import {
    useNavigate,
    useParams
} from 'react-router-dom';

import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { QuizContext } from '../../../../context/quiz';
import { SnackbarContext } from '../../../../context/snackbar';

import MultipleModalWindow from '../../../ui/windows/MultipleModalWindow/MultipleModalWindow';
import ShareIcon from '../../../ui/svg/ShareIcon/ShareIcon';
import CircularResults from './CircularResults/CircularResults';
import CustomButton from '../../../ui/custom/CustomButton/CustomButton';

import css from './ResultsModal.module.sass';
import QuestionResult from './AnswersResult/AnswersResult';

const ResultsModal = (props) => {
    const [quizState, dispatch] = useContext(QuizContext);
    const { handleClickSnackbar } = useContext(SnackbarContext);
    const { testId } = useParams();
    const navigate = useNavigate();
    const url = window.location.href;

    function handleCloseModal() {
        props.onClose();
        navigate('/tests');
    }

    function handleRestartTest() {
        props.onClose();
        dispatch({ type: 'RESTART' });
    }

    return (
        <MultipleModalWindow {...props}>
            <Box className={`${css.ModalContent} ${css.OverviewBlock}`}>
                <div className={css.UpperOverviewBlock}>
                    <div>
                        <p>{testId}</p>
                        <span>
                            <FormattedMessage id='w.the_most_beautiful_names_text' />
                        </span>
                    </div>
                    <div>
                        <CopyToClipboard text={url}>
                            <ShareIcon
                                onClick={handleClickSnackbar}
                                color='dark'
                            />
                        </CopyToClipboard>
                    </div>
                </div>
                <div className={css.LowerOverviewBlock}>
                    <CircularResults />
                    <div>
                        <FormattedMessage id='w.test_results_right_answers1' />
                        {quizState.correctAnswersCount}
                        <FormattedMessage id='w.test_results_right_answers2' />
                    </div>
                </div>
            </Box>

            <Box className={`${css.ModalContent} ${css.ListBlock}`}>
                {quizState.usersAnswers.map((obj, index) =>
                    <QuestionResult key={index} obj={obj} />
                )}
            </Box>

            <Box className={`${css.ModalContent} ${css.ButtonsBlock}`}>
                <CustomButton
                    text='test_button_repeat'
                    onClick={handleRestartTest}
                />
                <CustomButton
                    text='test_button_accept'
                    onClick={handleCloseModal}
                    filled={true}
                />
            </Box>
        </MultipleModalWindow>
    );
};

export default ResultsModal;