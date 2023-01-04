import Mosque1 from '../assets/mosques/Mosque1.webp';
import Mosque2 from '../assets/mosques/Mosque2.webp';
import Mosque3 from '../assets/mosques/Mosque3.webp';
import Mosque4 from '../assets/mosques/Mosque4.webp';
import Mosque5 from '../assets/mosques/Mosque5.webp';
import Mosque6 from '../assets/mosques/Mosque6.webp';
import Mosque7 from '../assets/mosques/Mosque7.webp';
import Mosque8 from '../assets/mosques/Mosque8.webp';
import Mosque9 from '../assets/mosques/Mosque9.webp';
import Mosque10 from '../assets/mosques/Mosque10.webp';

const mosquesArr = [Mosque1, Mosque2, Mosque3, Mosque4, Mosque5, Mosque6, Mosque7, Mosque8, Mosque9, Mosque10];
export const useMosque = (id) => {
    return <img
        src={mosquesArr[id % 10]}
        alt='mosque'
    />;
};