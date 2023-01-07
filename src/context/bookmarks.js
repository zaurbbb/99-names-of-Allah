import {
    createContext,
    useState
} from 'react';

export const BookmarksContext = createContext([]);

export const BookmarksProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);

    return <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
        {children}
    </BookmarksContext.Provider>
}