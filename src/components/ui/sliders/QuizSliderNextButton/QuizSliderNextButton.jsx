import React, {
    useContext,
    useEffect
} from 'react';

import { QuizContext } from '../../../../context/quiz';

import { useSwiper } from 'swiper/react';
import CustomButton from '../../custom/CustomButton/CustomButton';

const QuizSliderNextButton = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const swiper = useSwiper();

    useEffect(() => {
        quizState.currentQuestionIndex !== 0 && swiper.slideNext();
    }, [quizState.currentQuestionIndex, swiper]);

    return (
        <CustomButton
            text='test_next_question'
            size='regular'
            filled={true}
            style={{margin: '0 auto'}}
            onClick={() => quizState.currentAnswer !== '' && dispatch({ type: 'NEXT_QUESTION' })}
        />
    );
}

export default QuizSliderNextButton;