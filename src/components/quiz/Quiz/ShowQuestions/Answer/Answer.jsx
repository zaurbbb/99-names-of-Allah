import React from 'react';

import css from './Answer.module.sass';

const Answer = ({ answerText, onSelectAnswer, correctAnswer, currentAnswer }) => {
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? css.CorrectAnswer : '';
    const wrongAnswerClass = isWrongAnswer ? css.WrongAnswer : '';
    const disabledClass = currentAnswer ? css.DisabledAnswer : '';

    return (
        <div
            className={`${css.AnswerBlock} ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
            onClick={() => onSelectAnswer(answerText)}
        >
            <div className={css.AnswerText}>{answerText} <br/><br/></div>
        </div>
    );
};

export default Answer;