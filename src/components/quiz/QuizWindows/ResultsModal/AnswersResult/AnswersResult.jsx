import React from 'react';

import AnswerStatus from '../../../../ui/svg/AnswerStatus/AnswerStatus';

import css from './AnswersResult.module.sass';

const QuestionResult = ({ obj }) => {
    const nameIndex = obj.currentQuestion.nameIndex;
    const question = obj.currentQuestion.question;
    const usersAnswer = obj.usersAnswer;
    const correctAnswer = obj.currentQuestion.correctAnswer;

    return (
        <div className={css.Block}>
            <div className={css.NameIndex}>
                {nameIndex}
            </div>
            <div className={css.Answers}>
                <span>{question}</span>
                <span>{usersAnswer}</span>
                <span>{correctAnswer}</span>
            </div>
            <div className={css.AnswerStatus}>
                <AnswerStatus status={usersAnswer === correctAnswer} />
            </div>

        </div>
    );
};

export default QuestionResult;