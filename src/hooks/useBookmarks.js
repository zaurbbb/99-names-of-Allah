export const useBookmarks = () => {
    if (!localStorage.getItem('bookmarks')) {
       return null;
    } else {
        return JSON.parse(localStorage.getItem('bookmarks') || '0')
            .sort((a, b) => {return a - b});
    }
}