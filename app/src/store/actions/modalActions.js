export const openModal = (modal) => {
    return (dispatch, getState) => {
        dispatch({ type: "OPEN_MODAL", modal: modal })
    }
};

export const closeModal = () => {
    return (dispatch, getState) => {
        dispatch({ type: "CLOSE_MODAL" })
    }
};