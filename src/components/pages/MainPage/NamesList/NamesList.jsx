import React from "react";

import { Pagination } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import "swiper/css/navigation";
import { useChunks } from "../../../../hooks/useChunks";
import { useNamesCollection } from "../../../../hooks/useNamesCollection";

import NameCard from "../../../cards/NameCard/NameCard";
import SliderPrevButton from "../../../ui/slider/SliderPrevButton/SliderPrevButton";
import SliderNextButton from "../../../ui/slider/SliderNextButton/SliderNextButton";

import "swiper/css";
import "swiper/css/pagination";

const NamesList = () => {
    const namesCollection = useNamesCollection();
    const result = useChunks(namesCollection, 9);


    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
        >
            {result.map((collection, index) => (
                <SwiperSlide key={index}>
                    {collection.map(item => (
                        <NameCard
                            key={item.id}
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