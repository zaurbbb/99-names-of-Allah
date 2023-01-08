import React from 'react';

const Answer = ({ answerText, onSelectAnswer, index, correctAnswer, currentAnswer }) => {
    const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
    const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass = isCorrectAnswer ? 'correct-answer': '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer': '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';

    return (
        <div
            className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
            onClick={() => onSelectAnswer(answerText)}
        >
            <div className='answer-text'>{answerText} <br/><br/></div>
        </div>
    );
};

export default Answer;