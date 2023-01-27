import Mosque1 from "../assets/mosques/mosque1.svg";
import Mosque2 from "../assets/mosques/mosque2.svg";
import Mosque3 from "../assets/mosques/mosque3.svg";
import Mosque4 from "../assets/mosques/mosque4.svg";
import Mosque5 from "../assets/mosques/mosque5.svg";
import Mosque6 from "../assets/mosques/mosque6.svg";
import Mosque7 from "../assets/mosques/mosque7.svg";
import Mosque8 from "../assets/mosques/mosque8.svg";
import Mosque9 from "../assets/mosques/mosque9.svg";
import Mosque10 from "../assets/mosques/mosque10.svg";
import { useMemo } from "react";

const mosquesArr = [Mosque1, Mosque2, Mosque3, Mosque4, Mosque5, Mosque6, Mosque7, Mosque8, Mosque9, Mosque10];
export const useMosque = (id) => {
    const mosque = useMemo(() => mosquesArr[id % 10], [id]);
    return <img
        src={mosque}
        alt='mosque'
    />;
};