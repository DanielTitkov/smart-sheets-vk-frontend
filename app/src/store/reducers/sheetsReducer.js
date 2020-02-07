import { dataArrayToObject } from "../../utils/arrayUtils";

const initState = {
    activeSheet: null,
    recentSheets: null,
    sheetBlueprints: null,
    error: null,
    loading: false,
}

const sheetsReducer = (state=initState, action) => {
    switch (action.type) {
        case "SET_ACTIVE_SHEET":
            return {
                ...state,
                activeSheet: {
                    ...action.sheet
                }
            };
        case "UPDATE_ACTIVE_SHEET_DATA":
            return {
                ...state,
                activeSheet: {
                    ...state.activeSheet,
                    data: {
                        ...state.activeSheet.data,
                        [action.id] : action.data,
                    },
                }
            };
        case "GET_RECENT_SHEETS_SUCCESS":
            return {
                ...state,
                loading: false,
                recentSheets: action.sheets.map(sheet => {
                    return {
                        ...sheet,
                        data: dataArrayToObject(sheet.data)
                    }
                })
            };
        case "GET_RECENT_SHEET_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case "GET_SHEET_BLUEPRINTS_SUCCESS":
            return {
                ...state,
                sheetBlueprints: action.blueprints
            };
        case "POST_ACTIVE_SHEET_SUCCESS":
            return {
                ...state,
                activeSheet: {
                    ...action.sheet,
                    data: dataArrayToObject(action.sheet.data) // maybe move this into action?
                }
            };
        case "POST_ACTIVE_SHEET_ERROR":
            return {
                ...state,
                error: action.error
            };         
        case "GET_SHEET_BLUEPRINTS_ERROR":
            return {
                ...state,
                error: action.error
            };
        case "DELETE_SHEET_SUCCESS":
            return {
                ...state,
                activeSheet: state.activeSheet && (state.activeSheet.id === action.id) ? null : state.activeSheet
            };
        case "DELETE_SHEET_ERROR":
            return {
                ...state,
                error: action.error
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}

export default sheetsReducer;