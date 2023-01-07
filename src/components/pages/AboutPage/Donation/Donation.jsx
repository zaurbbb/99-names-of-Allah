import React from 'react';

import { FormattedMessage } from "react-intl";

import css from "./Donation.module.sass";

const Donation = () => {
    return (
        <div className={css.Block}>
            <div className={css.TextElement}>
                <h3>Kaspi Bank</h3>
                <h3>+7 (747) 325-52-45 (Кудайберген)</h3>
                <h3>4400 4301 3388 6595</h3>

                <h3>Halyk Bank</h3>
                <h3>+7 (747) 325-52-45 (Кудайберген)</h3>
                <h3>4390 8722 0454 2460</h3>
                <h3>KZ376010002009113712</h3>

                <h5><FormattedMessage id='w.about_page_donation_subtitle' /></h5>
            </div>
            <div className={css.ImgElement}>
                <img src="https://i.ibb.co/pRM9Zjy/hangs-img.webp"  alt='pic'/>
            </div>
        </div>
    );
};

export default Donation;