import React, { useContext } from 'react';

import { FormattedMessage } from 'react-intl';
import { QuizContext } from '../../../../../context/quiz';

import css from './ProgressBar.module.sass';

const ProgressBar = () => {
    const [quizState] = useContext(QuizContext);

    return (
        <div className={css.CurrentQuestion}>
            <h1>
                {quizState.currentQuestionIndex + 1} <FormattedMessage id='w.test_question_number' />
            </h1>
            <div className={css.ProgressBarOuter}>
                <div
                    className={css.ProgressBarInner}
                    style={{ width: `${quizState.currentQuestionIndex + 1}0%` }}
                >

                </div>
            </div>
        </div>
    );
};

export default ProgressBar;