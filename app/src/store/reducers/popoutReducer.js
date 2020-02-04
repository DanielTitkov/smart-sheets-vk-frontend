const initState = {
    popout: null
}

const popoutReducer = (state=initState, action) => {
    switch (action.type) {
        case "OPEN_POPOUT":
            return {popout: action.popout};
        case "CLOSE_POPOUT":
            return {popout: null}
        default:
            return state;
    }
}

export default popoutReducer;