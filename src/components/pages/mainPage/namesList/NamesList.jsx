import React, { useContext } from "react";

import { Pagination } from "swiper";
import {
    Swiper,
    SwiperSlide
} from "swiper/react";

import { LanguageContext } from "../../../../context";
import { messages } from "../../../../i18n/messages";

import NameCard from "../../../ui/nameCard/NameCard";
import SliderPrevButton from "../../../ui/sliderPrevButton/SliderPrevButton";
import SliderNextButton from "../../../ui/sliderNextButton/SliderNextButton";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useChunks } from "../../../../hooks/useChunks";

const NamesList = () => {
    const { currentLocale } = useContext(LanguageContext);
    const namesCollection = messages[currentLocale].n;
    const result = useChunks(namesCollection, 9);

    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className="mySwiper"
        >
            {result.map((collection) => (
                <SwiperSlide>
                    {collection.map(item => (
                        <NameCard
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