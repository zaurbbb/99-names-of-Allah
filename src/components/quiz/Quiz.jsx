import React, { useContext } from 'react';

import { QuizContext } from '../../context/quiz';

import ShowResults from './ShowResults/ShowResults';
import ShowQuestions from './ShowQuestions/ShowQuestions';
import QuizWindows from './QuizWindows/QuizWindows';

import './index.css';
import css from './Quiz.module.sass';

const Quiz = () => {
    const [quizState] = useContext(QuizContext);

    return (
        <div className={css.QuizBlock}>
            {/*When quiz is finished*/}
            {quizState.showResults && <ShowResults />}

            {/*When quiz is actively going*/}
            {!quizState.showResults && <ShowQuestions />}

            {/*Modals and Snackbar*/}
            <QuizWindows />
        </div>
    );
};

export default Quiz;