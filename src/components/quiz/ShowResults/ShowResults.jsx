import React, { useContext } from 'react';

import { QuizContext } from '../../../context/quiz';

import css from './ShowResults.module.sass';
import { FormattedMessage } from 'react-intl';
import CustomButton from '../../ui/custom/CustomButton/CustomButton';
import { Link } from 'react-router-dom';

const ShowResults = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function handleRestartTest() {
        dispatch({ type: 'RESTART' });
    }

    return (
        <div className={css.Block}>
            <h1>
                <FormattedMessage id='w.test_results_right_answers1' />
                {quizState.correctAnswersCount}
                <FormattedMessage id='w.test_results_right_answers2' />
            </h1>
            <div>
                <CustomButton
                    filled={true}
                    text='test_button_repeat'
                    onClick={handleRestartTest}
                />
                <Link to='/'>
                    <CustomButton text='unavailable_subtext' />
                </Link>
            </div>
        </div>
    );
};

export default ShowResults;