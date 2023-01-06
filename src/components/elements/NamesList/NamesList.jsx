import React, { useContext } from "react";

import { Pagination } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import "swiper/css/navigation";

import NameCard from "../../cards/NameCard/NameCard";
import SliderPrevButton from "../../ui/slider/SliderPrevButton/SliderPrevButton";
import SliderNextButton from "../../ui/slider/SliderNextButton/SliderNextButton";

import "swiper/css";
import "swiper/css/pagination";
import { WindowWidthContext } from '../../../context';

const NamesList = ({ result }) => {
    const { windowWidth } = useContext(WindowWidthContext);

    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
            slidesPerView={windowWidth && 2}

            slidesPerGroup={windowWidth && 1}
            centeredSlides={windowWidth && true}
            spaceBetween={windowWidth && 40}
        >
            {result.map((collection, index) => (
                <SwiperSlide key={index}>
                    {windowWidth > 576 ?
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
                        />}

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
