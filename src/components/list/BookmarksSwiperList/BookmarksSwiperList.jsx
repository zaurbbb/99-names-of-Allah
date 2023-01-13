import React, { useContext } from 'react';

import { WindowWidthContext } from '../../../context/windowWidth';
import { BookmarksContext } from '../../../context/bookmarks';

import {
    Swiper,
    SwiperSlide
} from 'swiper/react';
import { Pagination } from 'swiper';

import NameCard from '../../cards/NameCard/NameCard';
import SliderPrevButton from '../../ui/sliders/SliderPrevButton/SliderPrevButton';
import SliderNextButton from '../../ui/sliders/SliderNextButton/SliderNextButton';

const BookmarksSwiperList = ({ result }) => {
    const { isSmallDevice } = useContext(WindowWidthContext);
    const { bookmarks } = useContext(BookmarksContext);
    const isSliderButtonsShown = !isSmallDevice && bookmarks.length > (isSmallDevice ? 4 : 9);

    return (
        <Swiper
            pagination={true}
            modules={[Pagination]}
            className='bookmarksSwiper'
            loop={true}
            slidesPerView={isSmallDevice ? 2 : 1}
            slidesPerGroup={1}
            centeredSlides={true}
            spaceBetween={30}
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
            {isSliderButtonsShown &&
                <div className='swiper-navigation-button'>
                    <SliderPrevButton />
                    <SliderNextButton />
                </div>
            }
        </Swiper>
    );
};

export default BookmarksSwiperList;