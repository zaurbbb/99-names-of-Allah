import React, { useContext } from 'react';

import { QuizContext } from '../../../../context/quiz';

import Question from './Question/Question';
import ProgressBar from './ProgressBar/ProgressBar';

const ShowQuestions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div>
            <ProgressBar />
            <Question
                questions={quizState.questions}
            />
            <div
                className='next-button'
                onClick={() => quizState.currentAnswer !== '' && dispatch({ type: 'NEXT_QUESTION' })}
            >Next Question
            </div>
        </div>
    );
};

export default ShowQuestions;