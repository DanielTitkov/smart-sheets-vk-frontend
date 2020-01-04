const initState = {
    modal: null
}

const modalReducer = (state=initState, action) => {
    switch (action.type) {
        case "OPEN_MODAL":
            return {modal: action.modal};
        case "CLOSE_MODAL":
            return {modal: null}
        default:
            return state;
    }
}

export default modalReducer;