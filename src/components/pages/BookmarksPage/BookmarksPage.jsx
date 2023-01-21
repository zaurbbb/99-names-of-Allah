import React, { useContext } from 'react';

import { BookmarksContext } from '../../../context/bookmarks';

import { useBookmarks } from '../../../hooks/useBookmarks';
import { Navigate } from 'react-router-dom';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import AllNamesList from '../../lists/AllNamesList/AllNamesList';

const BookmarksPage = () => {
    const { bookmarks } = useContext(BookmarksContext);
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

    if (bookmarks.length === 0) {
        return <Navigate
            to='/'
            replace
        />
    }

    return (
        <section>
            <CustomHeading value='w.bookmarks_page_title' />
            <AllNamesList result={bookmarksList} />
        </section>
    );
};

export default BookmarksPage;