import React, {
    useContext,
    useState
} from "react";
import { WindowWidthContext } from '../../../context/windowWidth';

import { useNamesCollection } from '../../../hooks/useNamesCollection';
import { useChunks } from '../../../hooks/useChunks';

import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import NamesSwiperList from '../../lists/NamesSwiperList/NamesSwiperList';

const MainPage = () => {
    const { isTabletDevice } = useContext(WindowWidthContext);
    const [namesCollection] = useState(useNamesCollection(0, isTabletDevice && 3));
    const [result] = useState(useChunks(namesCollection, isTabletDevice ? 2 : 3));

    return (
        <section>
            <CustomHeading value={'w.the_most_beautiful_names_text'} />
            <NamesSwiperList result={isTabletDevice ? namesCollection : result} />
        </section>
    );
};

export default MainPage;