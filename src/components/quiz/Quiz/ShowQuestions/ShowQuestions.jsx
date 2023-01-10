import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import QuestionsList from './QuestionsList/QuestionsList';

const ShowQuestions = () => {
    return (
        <>
            <ProgressBar />
            <QuestionsList />
        </>
    );
};

export default ShowQuestions;