import React, { useContext } from 'react';

import { QuizContext } from '../../../../context/quiz';

import Question from './Question/Question';

const ShowQuestions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div>
            <div className='score'>
                Question {quizState.currentQuestionIndex + 1}
                / {quizState.questions.length}
            </div>
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