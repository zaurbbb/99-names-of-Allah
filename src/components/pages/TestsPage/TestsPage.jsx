import React from 'react';

import TestsList from '../../lists/TestsList/TestsList';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const TestsPage = () => {
    return (
        <section>
            <CustomHeading value={'w.test_page_title'} />
            <TestsList />
        </section>
    );
};

export default TestsPage;