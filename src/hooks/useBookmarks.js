export const useBookmarks = () => {
    return JSON.parse(localStorage.getItem('bookmarks') || '0');
}