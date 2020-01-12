import appConfig from "../../config/appConfig"
import axios from 'axios';

export const setActiveSheet = (sheet) => {
    return (dispatch, getState) => {
        const { activeSheet } = getState().sheets;
        let newSheet = null;
        if (sheet) {
            newSheet = activeSheet && activeSheet.id && (activeSheet.id === sheet.id) ? activeSheet : sheet;
        }
        dispatch({
            type: "SET_ACTIVE_SHEET", 
            sheet: newSheet,
        })
    }
};

export const updateActiveSheetData = (id, data) => {
    return (dispatch, getState) => {
        dispatch({ type: "UPDATE_ACTIVE_SHEET_DATA", id: id, data: data });
    }
};