import React, { useContext } from 'react';
import {
    Box,
    CircularProgress,
    Typography
} from '@mui/material';
import { WindowWidthContext } from '../../../../../context/windowWidth';
import { QuizContext } from '../../../../../context/quiz';

const CircularResults = () => {
    const { windowWidth } = useContext(WindowWidthContext)
    const [quizState] = useContext(QuizContext);

    return (
        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <CircularProgress
                variant="determinate"
                value={quizState.correctAnswersCount * 10}
                size={windowWidth <= 768 ? 110 : 160}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
                thickness={3}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                    sx={{textAlign: 'center'}}
                >
                    {quizState.correctAnswersCount} / 10
                </Typography>
            </Box>
        </Box>
    )
};

export default CircularResults;
