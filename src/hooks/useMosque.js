import Name1 from '../assets/mosques/NameImg10.webp';
import Name2 from '../assets/mosques/NameImg1.webp';
import Name3 from '../assets/mosques/NameImg2.webp';
import Name4 from '../assets/mosques/NameImg3.webp';
import Name5 from '../assets/mosques/NameImg4.webp';
import Name6 from '../assets/mosques/NameImg5.webp';
import Name7 from '../assets/mosques/NameImg6.webp';
import Name8 from '../assets/mosques/NameImg7.webp';
import Name9 from '../assets/mosques/NameImg8.webp';
import Name10 from '../assets/mosques/NameImg9.webp';

const mosquesArr = [Name1, Name2, Name3, Name4, Name5, Name6, Name7, Name8, Name9, Name10];
export const useMosque = (id) => {
    return <img
        src={mosquesArr[id % 10]}
        alt='mosque'
    />;
};