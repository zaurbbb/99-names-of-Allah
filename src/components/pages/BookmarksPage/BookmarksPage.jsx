import React, { useContext } from 'react';
import SectionLoader from '../../ui/loaders/SectionLoader/SectionLoader';
import { BookmarksContext } from '../../../context';
import { useBookmarks } from '../../../hooks/useBookmarks';
import NamesList from '../../elements/NamesList/NamesList';
import { useChunks } from '../../../hooks/useChunks';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const BookmarksPage = () => {

    let bookmarksList = [];
    const getBookmarks = useBookmarks();
    const { bookmarks } = useContext(BookmarksContext);

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
        return <SectionLoader />
    }
    console.log('bookmarks', bookmarks)

    return (
        <section>
            <CustomHeading value='w.bookmarks_page_title'/>
            <NamesList result={result} />
        </section>
    );
};

export default BookmarksPage;