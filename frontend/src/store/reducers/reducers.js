import { combineReducers } from 'redux';
import depositReducer from './depositReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';

export default combineReducers({
    deposit: depositReducer,
    user: userReducer,
    auth: authReducer
});