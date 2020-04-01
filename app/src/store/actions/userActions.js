import appConfig from "../../config/appConfig"
import axios from 'axios';
import vkconnect from '@vkontakte/vk-connect';
import { getAgeFromBDate } from "../../utils/dateUtils";

export const getCurrentUser = () => {
    return (dispatch, getState) => {
        vkconnect.sendPromise('VKWebAppGetUserInfo', {})
        .then(data => {
            dispatch({ type: "GET_VK_USER_SUCCESS", user: data });
            dispatch(sendCurrentUserData()); // save user data to backend
        })
        .catch(err => {
            dispatch({ type: "GET_VK_USER_ERROR", error: err });
        });
    }
};

export const sendCurrentUserData = () => {
    return (dispatch, getState) => {
        const { profile } = getState().user.currentUser;
        const age = getAgeFromBDate(profile.bdate);
        const userData = {
            age: age ? age : undefined,
            sex: profile.sex ? profile.sex : undefined,
            city: profile.city ? profile.city.title : undefined,
            timezone: profile.timezone ? profile.timezone : undefined,
            country: profile.country ? profile.country.title : undefined,
        };
        const { vkquery } = getState().validation;
        const url = appConfig.API_URL;
        axios.post(
            url + appConfig.urls.PROFILE,
            userData, 
            {
                params: {
                    ...vkquery.query,
                }
            }
        )
        .then(response => {
            dispatch({ type: "SEND_USER_DATA_SUCCESS" });
            dispatch(getCurrentUserSettings());
        })
        .catch(err => {
            dispatch({
                type: "SEND_USER_DATA_ERROR",
                error: err
            })
        });
    }
};

const getCurrentUserSettings = () => {
    return (dispatch, getState) => {
        const { vkquery } = getState().validation;
        const url = appConfig.API_URL;
        axios.get(
            url + appConfig.urls.SETTINGS, 
            {
                params: {
                    ...vkquery.query,
                }
            }
        )
        .then(response => {
            dispatch({
                type: "GET_USER_SETTINGS_SUCCESS",
                settings: response.data,
            })
        })
        .catch(err => {
            dispatch({
                type: "GET_USER_SETTINGS_ERROR",
                error: err
            })
        });
    }
}