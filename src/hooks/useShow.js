export const useShow = (location, firstState, secondState) => {
    return location.pathname === '/home'
        ? firstState
        : secondState;
};