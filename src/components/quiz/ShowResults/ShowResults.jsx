import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import { QuizContext } from '../../../context/quiz';

import CustomButton from '../../ui/custom/CustomButton/CustomButton';

import css from './ShowResults.module.sass';

const ShowResults = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function handleRestartTest() {
        dispatch({ type: 'RESTART' });
    }

    return (
        <div className={css.Block}>
            <h2>
                <FormattedMessage id='w.test_results_right_answers1' />
                {quizState.correctAnswersCount}
                <FormattedMessage id='w.test_results_right_answers2' />
            </h2>
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