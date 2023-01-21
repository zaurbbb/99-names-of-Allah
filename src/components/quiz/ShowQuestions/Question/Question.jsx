import React, { useContext } from "react";

import { QuizContext } from "../../../../context/quiz";

import Answer from "../Answer/Answer";

import css from "./Question.module.sass";

const Question = ({ currentQuestion }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    const shuffledAnswersArray = quizState.questions[quizState.currentQuestionIndex].shuffledAnswers;
    let clickCounter = 0;

    return (
        <div className={css.QuestionBlock}>
            <span className={css.NameText}>{currentQuestion.nameArabic}</span>
            <span className={css.NameText}>{currentQuestion.question}</span>
            <div className={css.AnswersBlock}>
                {shuffledAnswersArray.map((answer, index) => (
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