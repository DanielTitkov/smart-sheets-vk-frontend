import panelReducer from './panelReducer';
import { combineReducers } from 'redux';
import validationReducer from './validationReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
    panel: panelReducer,
    validation: validationReducer,
    user: userReducer,
    modal: modalReducer,
});

export default rootReducer;