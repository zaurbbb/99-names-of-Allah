import React, { useContext } from 'react';
import { WindowWidthContext } from '../../../context/windowWidth';

import { useNamesCollection } from '../../../hooks/useNamesCollection';
import { useChunks } from '../../../hooks/useChunks';

import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import NamesSwiperList from '../../lists/NamesSwiperList/NamesSwiperList';

const MainPage = () => {
    const { isSmallDevice } = useContext(WindowWidthContext);
    const namesCollection = useNamesCollection(0, isSmallDevice && 3);
    const result = useChunks(namesCollection, 3);

    return (
        <section>
            <CustomHeading value={'w.the_most_beautiful_names_text'} />
            <NamesSwiperList result={isSmallDevice ? namesCollection : result} />
        </section>
    );
};

export default MainPage;