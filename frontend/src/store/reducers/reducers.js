import { combineReducers } from 'redux';
import depositReducer from './depositReducer';


export default combineReducers({
    deposit: depositReducer

});