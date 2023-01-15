import React, { useContext } from 'react';

import { QuizContext } from '../../../../context/quiz';

import Answer from '../Answer/Answer';

import css from './Question.module.sass';

const Question = ({ questions }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = questions[quizState.currentQuestionIndex];

    let clickCounter = 0;
    return (
        <div className={css.QuestionBlock}>
            <span className={css.NameText}>{questions[quizState.currentQuestionIndex].nameArabic}</span>
            <span className={css.NameText}>{currentQuestion.question}</span>
            <div className={css.AnswersBlock}>
                {quizState.answers.map((answer, index) => (
                    <Answer
                        key={index}
                        index={index}
                        answerText={answer}
                        correctAnswer={currentQuestion.correctAnswer}
                        currentAnswer={quizState.currentAnswer}
                        onSelectAnswer={answerText => {
                            clickCounter === 0 ? dispatch({
                                type: 'SELECT_ANSWER',
                                payload: answerText
                            }) : clickCounter++;
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Question;