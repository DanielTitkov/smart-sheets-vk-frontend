import panelReducer from './panelReducer';
import { combineReducers } from 'redux';
import validationReducer from './validationReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    panel: panelReducer,
    validation: validationReducer,
    user: userReducer,
});

export default rootReducer;