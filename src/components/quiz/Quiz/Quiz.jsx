import React, { useContext } from 'react';

import { QuizContext } from '../../../context/quiz';

import ShowResults from './ShowResults/ShowResults';
import ShowQuestions from './ShowQuestions/ShowQuestions';
import QuizWindows from './QuizWindows/QuizWindows';

import './index.css';

const Quiz = () => {
    const [quizState] = useContext(QuizContext);

    return (
        <div className='quiz'>
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