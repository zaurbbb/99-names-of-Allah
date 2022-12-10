export const useShow = (location, firstState, secondState) => {
    return location.pathname === '/' || location.pathname === '/bookmarks'
        ? firstState
        : secondState;
};