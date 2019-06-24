import { combineReducers } from 'redux';
import depositReducer from './depositReducer';
import userReducer from './userReducer';

export default combineReducers({
    deposit: depositReducer,
    user: userReducer
});