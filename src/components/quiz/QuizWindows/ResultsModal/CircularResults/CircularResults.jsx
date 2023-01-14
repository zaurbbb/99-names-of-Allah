import React, { useContext } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';

import { WindowWidthContext } from '../../../../../context/windowWidth';
import { QuizContext } from '../../../../../context/quiz';

import css from './CircularResults.module.sass';

const CircularResults = () => {
    const { isSmallDevice } = useContext(WindowWidthContext);
    const [quizState] = useContext(QuizContext);

    return (
        <div className={css.Block}>
            <CircularProgress
                determinate
                value={quizState.correctAnswersCount * 10}
                size='lg'
                thickness={isSmallDevice ? 8 : 10}
            >
                <p className={css.TextBlock}>
                    <span>
                        {quizState.correctAnswersCount}
                    </span>
                    <span>
                        /10
                    </span>
                </p>
            </CircularProgress>
        </div>
    )
};

export default CircularResults;
