import React, { useContext } from 'react';

import { BookmarksContext } from '../../../context/bookmarks';
import { WindowWidthContext } from '../../../context/windowWidth';

import { useBookmarks } from '../../../hooks/useBookmarks';
import { useChunks } from '../../../hooks/useChunks';
import { Navigate } from 'react-router-dom';

import NamesList from '../../elements/NamesList/NamesList';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const BookmarksPage = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const { windowWidth } = useContext(WindowWidthContext);
    let bookmarksList = [];
    const getBookmarks = useBookmarks();

    for (let i = 0; i < getBookmarks.length; i++) {
        let item = localStorage.getItem('bookmarkItem' + getBookmarks[i]);
        if (item === null) {
            console.error('err, no bookmarks');
        } else {
            bookmarksList.push(JSON.parse(localStorage.getItem('bookmarkItem' + getBookmarks[i]) || ''));
        }
    }
    const result = useChunks(bookmarksList, 3);

    if (bookmarks.length === 0) {
        return <Navigate to='/' replace/>
    }

    return (
        <section>
            <CustomHeading value='w.bookmarks_page_title'/>
            <NamesList result={windowWidth > 576 ? result : bookmarksList } />
        </section>
    );
};

export default BookmarksPage;