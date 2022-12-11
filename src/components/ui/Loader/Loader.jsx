import React from 'react';
import './Loader.sass'
import css from './Loader.module.sass';

function Loader() {
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

export default Loader;
