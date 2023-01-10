import React, {
    useContext,
    useEffect
} from 'react';

import { QuizContext } from '../../../../context/quiz';

import { useSwiper } from 'swiper/react';

const QuizSliderNextButton = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const swiper = useSwiper();
    console.log(quizState.currentQuestionIndex)
    useEffect(() => {
        quizState.currentQuestionIndex !== 0 && swiper.slideNext();
    }, [quizState.currentQuestionIndex]);

    return (
        <div
            className="swiper-button-next"
            onClick={() => quizState.currentAnswer !== '' && dispatch({ type: 'NEXT_QUESTION' })}
        ></div>
    );
}

export default QuizSliderNextButton;