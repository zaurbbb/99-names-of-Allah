import React from 'react';

import CorrectAnswer from './correctAnswer.svg';
import IncorrectAnswer from './incorrectAnswer.svg';

const AnswerStatus = ({status}) => {
    const svg = status ? CorrectAnswer : IncorrectAnswer;

    return (
        <img
            src={svg}
            alt='icon'
        />
    );
};

export default AnswerStatus;