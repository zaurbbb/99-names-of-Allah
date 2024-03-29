import React from 'react';

import { useNamesCollection } from '../../../hooks/useNamesCollection';

import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import AllNamesList from '../../lists/AllNamesList/AllNamesList';

const AllNamesPage = () => {
    const namesCollection = useNamesCollection(0, 99);

    return (
        <section>
            <CustomHeading value='w.header_allNames' />
            <AllNamesList result={namesCollection}/>
        </section>
    );
};

export default AllNamesPage;