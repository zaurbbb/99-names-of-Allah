import {
    useCallback,
    useContext
} from 'react';
import { BookmarksContext } from '../context/bookmarks';

export const useBookmarkName = () => {
    const { bookmarks, setBookmarks } = useContext(BookmarksContext);

    const bookmarkName = useCallback(({ item, id }) => {
        let array = bookmarks;
        let addArray = true;

        array.forEach((item, idx) => {
            if (item === id) {
                array.splice(idx, 1);
                addArray = false;
            }
        })

        if (addArray) {
            array.push(id);
        }

        setBookmarks([...array]);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        let storage = localStorage.getItem('bookmarkItem' + (id) || null);
        if (storage === null) {
            localStorage.setItem(('bookmarkItem' + (id)), JSON.stringify(item));
        } else {
            localStorage.removeItem('bookmarkItem' + (id));
        }
    }, [bookmarks, setBookmarks]);

    return { bookmarkName };
}