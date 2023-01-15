import React, { useContext } from 'react';

import { EffectCards } from 'swiper';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import { QuizContext } from '../../../context/quiz';
import { WindowWidthContext } from '../../../context/windowWidth';

import Question from '../../quiz/ShowQuestions/Question/Question';
import QuizSliderNextButton from '../../ui/sliders/QuizSliderNextButton/QuizSliderNextButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import './questionsSwiperList.sass';


const QuestionsSwiperList = () => {
    const { isTabletDevice } = useContext(WindowWidthContext);
    const [quizState] = useContext(QuizContext);
    const effectValue = isTabletDevice ? null : 'cards';

    return (
        <div className='swiperBlock'>
            <Swiper
                modules={[EffectCards]}
                cardsEffect={{
                    perSlideOffset: 8
                }}
                effect={effectValue}
                allowTouchMove={false}

                className='questionsSwiper'
            >
                {quizState.questions.map((el, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <Question questions={quizState.questions} />
                    </SwiperSlide>
                ))}
                <br />
                <QuizSliderNextButton />
            </Swiper>
        </div>
    );
};

export default QuestionsSwiperList;