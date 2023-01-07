import Mosque1 from '../assets/mosques/Mosque1.svg';
import Mosque2 from '../assets/mosques/Mosque2.svg';
import Mosque3 from '../assets/mosques/Mosque3.svg';
import Mosque4 from '../assets/mosques/Mosque4.svg';
import Mosque5 from '../assets/mosques/Mosque5.svg';
import Mosque6 from '../assets/mosques/Mosque6.svg';
import Mosque7 from '../assets/mosques/Mosque7.svg';
import Mosque8 from '../assets/mosques/Mosque8.svg';
import Mosque9 from '../assets/mosques/Mosque9.svg';
import Mosque10 from '../assets/mosques/Mosque10.svg';

const mosquesArr = [Mosque1, Mosque2, Mosque3, Mosque4, Mosque5, Mosque6, Mosque7, Mosque8, Mosque9, Mosque10];
export const useMosque = (id) => {
    return <img
        src={mosquesArr[id % 10]}
        alt='mosque'
    />;
};