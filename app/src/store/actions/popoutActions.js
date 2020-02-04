export const openPopout = (popout) => {
    return (dispatch, getState) => {
        dispatch({ type: "OPEN_POPOUT", popout: popout })
    }
};

export const closePopout = () => {
    return (dispatch, getState) => {
        dispatch({ type: "CLOSE_POPOUT" })
    }
};