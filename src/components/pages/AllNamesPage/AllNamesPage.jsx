import React from 'react';

import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

import css from './AllNamesPage.module.sass';

const AllNamesPage = () => {
    return (
        <section>
            <CustomHeading value='w.bookmarks_page_title'/>
            {/*<NamesList result={windowWidth > 576 ? result : bookmarksList } />*/}
        </section>
    );
};

export default AllNamesPage;