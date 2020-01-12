const initState = {
    activeSheet: null,
    recentSheets: null,
    sheetBlueprints: null,
}

const sheetsReducer = (state=initState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_SHEET":
            return {
                ...state,
                activeSheet: action.sheet
            };
        case "UPDATE_ACTIVE_SHEET_DATA":
            return {
                ...state,
                activeSheet: {
                    ...state.activeSheet,
                    data: {
                        ...state.activeSheet.data,
                        [action.id] : action.data,
                    }
                }
            };
        case "GET_RECENT_SHEETS":
            return {
                ...state,
                recentSheets: action.sheets
            };
        case "GET_SHEET_BLUEPRINTS":
            return {
                ...state,
                sheetBlueprints: action.blueprints
            };
        default:
            return state;
    }
}

export default sheetsReducer;