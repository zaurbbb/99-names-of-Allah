import React, { useContext } from 'react';

import { QuizContext } from '../../../../context/quiz';

const ShowResults = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className='results'>
            <div className='congratulations'>
                Congratulations
            </div>
            <div className='results-info'>
                <div>You've completed the quiz <br/><br/></div>
                <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length} <br/><br/></div>
                <div
                    className='next-button'
                    onClick={() => dispatch({type: 'RESTART'})}
                >Restart</div>
            </div>
        </div>
    );
};

export default ShowResults;