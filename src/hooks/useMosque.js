import Name0 from "../assets/mosques/NameImg9.webp";
import Name1 from "../assets/mosques/NameImg0.webp";
import Name2 from "../assets/mosques/NameImg1.webp";
import Name3 from "../assets/mosques/NameImg2.webp";
import Name4 from "../assets/mosques/NameImg3.webp";
import Name5 from "../assets/mosques/NameImg4.webp";
import Name6 from "../assets/mosques/NameImg5.webp";
import Name7 from "../assets/mosques/NameImg6.webp";
import Name8 from "../assets/mosques/NameImg7.webp";
import Name9 from "../assets/mosques/NameImg8.webp";

export const useMosque = (id) => {
    const mosquesArr = [Name0, Name1, Name2, Name3, Name4, Name5, Name6, Name7, Name8, Name9];
    return mosquesArr[id % 10];
};