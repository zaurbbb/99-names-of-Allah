import {
    createContext,
    useReducer
} from 'react';

import questions from '../data/questions';
import { shuffleAnswers } from '../helpers/shuffleAnswers';

export const QuizContext = createContext();

const initialState = {
    questions: questions,
    currentQuestionIndex: 0,
    showResults: false,
    answers: shuffleAnswers(questions[0]),
    currentAnswer: '',
    correctAnswersCount: 0,
    usersAnswers: [],
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_ANSWER': {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            const usersAnswer = action.payload;
            const correctAnswersCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswersCount + 1 : state.correctAnswersCount;
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswersCount,
                usersAnswers: [
                    ...state.usersAnswers,
                    {
                        currentQuestion,
                        usersAnswer,
                    }
                ]
            }
        }
        case 'NEXT_QUESTION': {
            const showResults = state.currentQuestionIndex === state.questions.length - 1;
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
            const answers = showResults ? [] : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                currentAnswer: '',
            };
        }
        case 'RESTART': {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>
}