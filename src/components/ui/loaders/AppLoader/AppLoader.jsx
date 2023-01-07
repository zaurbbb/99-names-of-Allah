import React from 'react';

import './AppLoader.sass'
import css from './AppLoader.module.sass';

function AppLoader() {
    return (
        <div className={css.Block}>
            <p className={css.ArabicText}>بِسۡمِ ٱللهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ</p>
            <p  className={css.KazakhText}>Бисмилләһи-р-рахмани-р-рахим</p>
            <div className='lds-ellipsis'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
    );
}

export default AppLoader;
