import React, { useContext } from 'react';

import { QuizContext } from '../../../../../context/quiz';

import Answer from '../Answer/Answer';

import css from './Question.module.sass';

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    let clickCounter = 0;
    return (
        <div className={css.QuestionBlock}>
            <div className={css.NameBlock}>
                {currentQuestion.question}
            </div>
            <div className={css.AnswersBlock}>
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