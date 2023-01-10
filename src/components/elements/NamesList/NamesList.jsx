import React, { useContext } from 'react';

import { Pagination } from 'swiper';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import { WindowWidthContext } from '../../../context/windowWidth';

import NameCard from '../../cards/NameCard/NameCard';
import SliderPrevButton from '../../ui/sliders/SliderPrevButton/SliderPrevButton';
import SliderNextButton from '../../ui/sliders/SliderNextButton/SliderNextButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.sass';

const NamesList = ({ result }) => {
    const { isSmallDevice } = useContext(WindowWidthContext);

    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className='mySwiper'
            loop={true}
            slidesPerView={isSmallDevice ? 1 : 2}
            slidesPerGroup={1}
            centeredSlides={true}
            spaceBetween={30}
        >
            {result.map((collection, index) => (
                <SwiperSlide key={index}>
                    {isSmallDevice ?
                        collection.map(item => (
                            <NameCard
                                key={item.id}
                                item={item}
                                id={item.id}
                                nameArabic={item.nameArabic}
                                name={item.name}
                                shortMeaning={item.shortMeaning}
                            />
                        )) : <NameCard
                            key={collection.id}
                            item={collection}
                            id={collection.id}
                            nameArabic={collection.nameArabic}
                            name={collection.name}
                            shortMeaning={collection.shortMeaning}
                        />
                    }

                </SwiperSlide>
            ))}
            <div className='swiper-navigation-button'>
                <SliderPrevButton />
                <SliderNextButton />
            </div>
        </Swiper>
    );
};

export default NamesList;