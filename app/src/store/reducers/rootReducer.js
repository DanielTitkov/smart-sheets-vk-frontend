import { combineReducers } from 'redux';
import panelReducer from './panelReducer';
import validationReducer from './validationReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';
import sheetsReducer from './sheetsReducer';

const rootReducer = combineReducers({
    panel: panelReducer,
    validation: validationReducer,
    user: userReducer,
    modal: modalReducer,
    sheets: sheetsReducer,
});

export default rootReducer;