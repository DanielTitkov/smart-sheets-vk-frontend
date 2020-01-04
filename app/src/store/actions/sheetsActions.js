import appConfig from "../../config/appConfig"
import axios from 'axios';

export const setActiveSheet = (sheet) => {
    return (dispatch, getState) => {
        const { activeSheet } = getState().sheets;
        let newSheet = null;
        if (sheet) {
            newSheet = activeSheet && (activeSheet.id === sheet.id) ? activeSheet : sheet;
        }
        dispatch({
            type: "SET_ACTIVE_SHEET", 
            sheet: newSheet,
        })
    }
};