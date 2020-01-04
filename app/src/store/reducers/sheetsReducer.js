const initState = {
    activeSheet: null,
}

const sheetsReducer = (state=initState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_SHEET":
            return {
                ...state,
                activeSheet: action.sheet
            };
        default:
            return state;
    }
}

export default sheetsReducer;