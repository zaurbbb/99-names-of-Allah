import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import QuestionsSwiperList from '../../lists/QuestionsSwiperList/QuestionsSwiperList';

const ShowQuestions = () => {
    return (
        <>
            <ProgressBar />
            <QuestionsSwiperList />
        </>
    );
};

export default ShowQuestions;