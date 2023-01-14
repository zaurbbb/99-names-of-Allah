import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { EffectCards } from 'swiper';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import { useNamesCollection } from '../../../hooks/useNamesCollection';
import { useGenerateQuestions } from '../../../hooks/useGenerateQuestions';

import { QuizContext } from '../../../context/quiz';
import { WindowWidthContext } from '../../../context/windowWidth';

import { testList } from '../../../data/testList';
import questions from '../../../data/questions';

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

    const { testId } = useParams();
    const testObject = testList.find(object => object['value'] === testId);
    const allNamesCollection = useNamesCollection(99);
    const rangeNamesCollection = useNamesCollection(testObject.startIndex - 1, testObject.endIndex);

    const questionsList = useGenerateQuestions(testId, allNamesCollection, rangeNamesCollection);
    console.log(questionsList);

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
                {questions.map((el, index) => (
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