import React, { useContext } from 'react';
import {
    BookmarksContext,
    WindowWidthContext
} from '../../../context';
import { useBookmarks } from '../../../hooks/useBookmarks';
import NamesList from '../../elements/NamesList/NamesList';
import { useChunks } from '../../../hooks/useChunks';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import { Navigate } from 'react-router-dom';

const BookmarksPage = () => {

    let bookmarksList = [];
    const getBookmarks = useBookmarks();
    const { bookmarks } = useContext(BookmarksContext);
    const { windowWidth } = useContext(WindowWidthContext);

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