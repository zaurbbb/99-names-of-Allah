import React, { useContext } from 'react';
import SectionLoader from '../../ui/loaders/SectionLoader/SectionLoader';
import { BookmarksContext } from '../../../context';
import { useBookmarks } from '../../../hooks/useBookmarks';
import NamesList from '../MainPage/NamesList/NamesList';
import { useChunks } from '../../../hooks/useChunks';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const BookmarksPage = () => {

    let bookmarksList = [];
    const getBookmarks = useBookmarks();
    const { bookmarks } = useContext(BookmarksContext);

    for (let i = 0; i < getBookmarks.length; i++) {
        let item = localStorage.getItem('bookmarkItem' + getBookmarks[i]);
        console.log('getItem bookmarkItem' + getBookmarks[i], JSON.parse(item));
        if (item === null) {
            console.error('err, no bookmarks')
        } else {
            bookmarksList.push(JSON.parse(localStorage.getItem('bookmarkItem' + getBookmarks[i]) || ''));
        }
    }
    const result = useChunks(bookmarksList, 6);

    if (bookmarks === null) {
        return <SectionLoader />
    }

    return (
        <section>
            <CustomHeading value='w.bookmarks_page_title'/>
            <NamesList result={result} />
        </section>
    );
};

export default BookmarksPage;