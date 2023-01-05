import React from "react";

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

const NamesList = ({ result }) => {

    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
            loop={true}
        >
            {result.map((collection, index) => (
                <SwiperSlide key={index}>
                    {collection.map(item => (
                        <NameCard
                            key={item.id}
                            item={item}
                            id={item.id}
                            nameArabic={item.nameArabic}
                            name={item.name}
                            shortMeaning={item.shortMeaning}
                        />
                    ))}
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