export const useShow = (location, firstState, secondState) => {
    return location.pathname === '/'
        ? firstState
        : secondState;
};