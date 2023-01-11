import React from 'react';

import { QuizProvider } from '../../../context/quiz';

import { useParams } from 'react-router-dom';

import Quiz from '../../quiz/Quiz';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const TestPage = () => {
    const { testId } = useParams();
    return (
        <section>
            <CustomHeading
                value={`w.test_title`}
                before={testId}
            />
            <QuizProvider>
                <Quiz />
            </QuizProvider>
        </section>
    );
};

export default TestPage;