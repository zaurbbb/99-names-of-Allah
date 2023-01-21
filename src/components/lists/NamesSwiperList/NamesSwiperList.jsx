import React, { useContext } from 'react';

import {
    Pagination,
    Keyboard
} from 'swiper';
import {
    Swiper,
    SwiperSlide
} from 'swiper/react';

import { WindowWidthContext } from '../../../context/windowWidth';

import NameCard from '../../cards/NameCard/NameCard';
import SliderPrevButton from '../../ui/sliders/SliderPrevButton/SliderPrevButton';
import SliderNextButton from '../../ui/sliders/SliderNextButton/SliderNextButton';
import ShowMoreCard from '../../cards/ShowMoreCard/ShowMoreCard';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './namesSwiper.sass';

const NamesSwiperList = ({ result }) => {
    const { isSmallDevice } = useContext(WindowWidthContext);

    return (
        <Swiper
            modules={[Pagination, Keyboard]}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            loop={result.length > 3 && true}
            slidesPerView={isSmallDevice ? 2 : 1}
            slidesPerGroup={1}
            centeredSlides={true}
            spaceBetween={30}
            className='namesSwiper'
        >
            {result.map((collection, index) => (
                <SwiperSlide key={index}>
                    {isSmallDevice ?
                        <NameCard
                            key={collection.id}
                            item={collection}
                            id={collection.id}
                            nameArabic={collection.nameArabic}
                            name={collection.name}
                            shortMeaning={collection.shortMeaning}
                        /> :
                        collection.map(item => (
                            <NameCard
                                key={item.id}
                                item={item}
                                id={item.id}
                                nameArabic={item.nameArabic}
                                name={item.name}
                                shortMeaning={item.shortMeaning}
                            />
                        ))
                    }
                </SwiperSlide>
            ))}
            {isSmallDevice &&
                <SwiperSlide>
                    <ShowMoreCard
                        key={'item.id'}
                        item={'item'}
                        id={'item.id'}
                        nameArabic={'item.nameArabic'}
                        name={'item.name'}
                        shortMeaning={'item.shortMeaning'}
                    />
                </SwiperSlide>
            }
            <div className='swiper-navigation-button'>
                <SliderPrevButton />
                <SliderNextButton />
            </div>
        </Swiper>
    );
};

export default NamesSwiperList;