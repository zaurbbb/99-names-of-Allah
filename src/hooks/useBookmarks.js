export const useBookmarks = () => {
    return JSON.parse(localStorage.getItem('bookmarks') || '0')
        .sort((a, b) => {return a - b});
}