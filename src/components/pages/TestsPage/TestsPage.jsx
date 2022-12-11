import React from 'react';

import TestsList from "./TestsList/TestsList";
import Heading from "../../ui/Heading/Heading";

const TestsPage = () => {
    return (
        <section>
            <Heading value={'w.test_page_title'} />
            <TestsList />
        </section>
    );
};

export default TestsPage;