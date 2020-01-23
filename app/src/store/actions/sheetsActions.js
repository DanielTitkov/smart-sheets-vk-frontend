import appConfig from "../../config/appConfig"
import axios from 'axios';

export const setActiveSheet = (sheetOrBlueprint) => {
    return (dispatch, getState) => {
        const { activeSheet } = getState().sheets;
        let newSheet = null;
        if (sheetOrBlueprint && sheetOrBlueprint.blueprint) { // if we have sheet
            newSheet = activeSheet && activeSheet.id && (activeSheet.id === sheetOrBlueprint.id) ? activeSheet : sheetOrBlueprint;
        } else { // if we have blueprint
            newSheet = {};
            newSheet['blueprint'] = sheetOrBlueprint;
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

export const getRecentSheets = () => {
    return (dispatch, getState) => {
        const url = appConfig.API_URL;
        const { vkquery } = getState().validation;
        const params = {...vkquery.query}       

        axios.get(url + "sheets/", {
            params: params
        })
        .then(response => {
            dispatch({
                type: "GET_RECENT_SHEETS_SUCCESS",
                sheets: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: "GET_RECENT_SHEET_ERROR",
                error: err
            })
        });
    }
}

export const getSheetBlueprints = () => {
    return (dispatch, getState) => {
        const url = appConfig.API_URL;
        const { vkquery } = getState().validation;
        const params = {...vkquery.query}       

        axios.get(url + "blueprints/", {
            params: params
        })
        .then(response => {
            dispatch({
                type: "GET_SHEET_BLUEPRINTS_SUCCESS",
                blueprints: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: "GET_SHEET_BLUEPRINTS_ERROR",
                error: err
            })
        });
    }
}