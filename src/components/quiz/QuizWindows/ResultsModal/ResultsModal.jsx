import React, { useContext } from 'react';
import {
    useNavigate,
    useParams
} from 'react-router-dom';

import { Box } from '@mui/material';
import {
    CssVarsProvider,
    StyledEngineProvider
} from '@mui/joy/styles';
import { FormattedMessage } from 'react-intl';

import { QuizContext } from '../../../../context/quiz';

import { joyTheme } from '../../../../themes/joyTheme';

import MultipleModalWindow from '../../../ui/windows/MultipleModalWindow/MultipleModalWindow';
import CircularResults from './CircularResults/CircularResults';
import CustomButton from '../../../ui/custom/CustomButton/CustomButton';
import QuestionResult from './AnswersResult/AnswersResult';
import ShareUrl from '../../../elements/ShareUrl/ShareUrl';

import css from './ResultsModal.module.sass';

const ResultsModal = (props) => {
    const [quizState, dispatch] = useContext(QuizContext);

    const { testId } = useParams();
    const navigate = useNavigate();

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
                        <ShareUrl iconColor='dark'/>
                    </div>
                </div>
                <div className={css.LowerOverviewBlock}>
                    <StyledEngineProvider injectFirst>
                        <CssVarsProvider theme={joyTheme}>
                            <CircularResults />
                        </CssVarsProvider>
                    </StyledEngineProvider>
                    <div>
                        <FormattedMessage id='w.test_results_right_answers1' />
                        {quizState.correctAnswersCount}
                        <FormattedMessage id='w.test_results_right_answers2' />
                    </div>
                </div>
            </Box>

            <Box className={`${css.ModalContent} ${css.ListBlock}`}>
                {quizState.usersAnswers.map((obj, index) =>
                    <QuestionResult
                        key={index}
                        obj={obj}
                    />
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