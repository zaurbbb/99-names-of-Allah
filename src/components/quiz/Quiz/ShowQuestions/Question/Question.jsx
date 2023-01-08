import React, { useContext } from 'react';

import { QuizContext } from '../../../../../context/quiz';

import Answer from '../Answer/Answer';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    console.log(quizState.answers);
    let clickCounter = 0;
    return (
        <div>
            <div className='question'>
                {currentQuestion.question}
            </div>
            <div className='answers'>
                {quizState.answers.map((answer, index) => (
                    <Answer
                        key={index}
                        index={index}
                        answerText={answer}
                        correctAnswer={currentQuestion.correctAnswer}
                        currentAnswer={quizState.currentAnswer}
                        onSelectAnswer={answerText => {
                            clickCounter === 0 ? dispatch({ type: 'SELECT_ANSWER', payload: answerText }) : clickCounter++;
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;