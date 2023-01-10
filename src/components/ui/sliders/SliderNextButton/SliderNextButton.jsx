import React from 'react';

import { useSwiper } from 'swiper/react';

const SliderNextButton = () => {
    const swiper = useSwiper();

    return (
        <div
            className="swiper-button-next"
            onClick={() => swiper.slideNext()}
        ></div>
    );
}

export default SliderNextButton;