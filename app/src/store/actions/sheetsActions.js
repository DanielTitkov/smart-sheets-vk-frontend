import appConfig from "../../config/appConfig"
import axios from 'axios';
import { getElementData, newDataObject } from "../../utils/sheetsBuilder";
import { dataObjectToArray } from "../../utils/arrayUtils";

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

export const updateActiveSheetData = (id, dataContent) => {
    return (dispatch, getState) => {
        dispatch({ type: "UPDATE_ACTIVE_SHEET_DATA", id: id, data: dataContent });
    }
};

export const getRecentSheets = () => {
    return (dispatch, getState) => {

        dispatch({type: "SET_LOADING"});

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

export const postActiveSheet = () => {
    return (dispatch, getState) => {
        const url = appConfig.API_URL;
        const { activeSheet } = getState().sheets;
        const { vkquery } = getState().validation;

        if (activeSheet && activeSheet.id) { // update sheet
            axios.put( // maybe refactor later : only method and url are different
                url + 'sheets/' + activeSheet.id + "/", 
                {
                    blueprintId: activeSheet.blueprint.id,
                    data: dataObjectToArray(activeSheet.data)
                },
                {
                    params:  {...vkquery.query}   
                }
            ).then(response => {
                dispatch({ type: "POST_ACTIVE_SHEET_SUCCESS", sheet: response.data });   
                dispatch(getRecentSheets()) // maybe use didInvalidate property in state
            }).catch(err => {
                dispatch({ type: "POST_ACTIVE_SHEET_ERROR", error: err });
            });
        } else if (activeSheet) { // create sheet
            axios.post(
                url + 'sheets/',
                {
                    blueprintId: activeSheet.blueprint.id,
                    data: dataObjectToArray(activeSheet.data)
                },   
                {
                    params:  {...vkquery.query}   
                }           
            ).then(response => {
                dispatch({ type: "POST_ACTIVE_SHEET_SUCCESS", sheet: response.data });   
                dispatch(getRecentSheets()) // maybe use didInvalidate property in state
            }).catch(err => {
                dispatch({ type: "POST_ACTIVE_SHEET_ERROR", error: err });
            });
        }
    }
};

export const deleteSheet = (sheet) => {
    return (dispatch, getState) => {
        const url = appConfig.API_URL;
        const { vkquery } = getState().validation;
        axios.put( // maybe refactor later 
            
            url + 'sheets/' + sheet.id + "/", 
            {
                blueprintId: sheet.blueprint.id,
                data: dataObjectToArray(sheet.data),
                deleted: true
            },
            {
                params:  {...vkquery.query}   
            }
        ).then(response => {
            dispatch({ type: "DELETE_SHEET_SUCCESS", id: sheet.id });   
            dispatch(getRecentSheets()) // maybe use didInvalidate property in state
        }).catch(err => {
            dispatch({ type: "DELETE_SHEET_ERROR", error: err });
        });
    }
}
