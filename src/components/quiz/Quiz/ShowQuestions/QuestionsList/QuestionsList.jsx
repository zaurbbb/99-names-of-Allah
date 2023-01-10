import React, {
    useContext,
    useEffect,
    useRef
} from 'react';

import { Pagination } from 'swiper';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import questions from '../../../../../data/questions'

import { QuizContext } from '../../../../../context/quiz';

import Question from '../Question/Question';
import QuizSliderNextButton from '../../../../ui/sliders/QuizSliderNextButton/QuizSliderNextButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './swiper.sass';

const QuestionsList = () => {
    const [quizState] = useContext(QuizContext);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current.swiper;
        console.log('active;', swiper.activeIndex );
        const prevSlide = swiper.slides[swiper.activeIndex - 2];
        prevSlide.style.transform = 'translateX(16%) scale(0.75)';
        // Now you can manipulate the prevSlide element as needed
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            pagination={true}
            modules={[Pagination]}
            className='mySwiper'
            loop={true}
            slidesPerGroup={1}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={-800}
            allowTouchMove={false}
        >
            {questions.map((el, index) => (
                <SwiperSlide
                    key={index}
                >
                    <Question
                        questions={quizState.questions}
                    />
                </SwiperSlide>
            ))}
            <div className='swiper-navigation-button'>
                <QuizSliderNextButton />
            </div>
        </Swiper>
    );
};

export default QuestionsList;