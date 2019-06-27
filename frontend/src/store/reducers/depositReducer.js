import { GET_DEPOSIT } from '../actions/actionTypes';
import { GET_DEPOSITS } from '../actions/actionTypes';
import { PUT_DEPOSIT } from '../actions/actionTypes';
import { NEW_DEPOSIT } from '../actions/actionTypes';
import { DEL_DEPOSIT } from '../actions/actionTypes';

const initialState = {
    depositItems: [],
    depositItem: {}

}

//export default function (state = initialState, action) {
const depositReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEL_DEPOSIT:
            return state;

        case GET_DEPOSITS:
            return {
                ...state,
                depositItems: action.payload
            }

        case NEW_DEPOSIT:

            return {
                ...state,
                depositItem: action.payload
            }

        case PUT_DEPOSIT:
            return {
                ...state,
                depositItem: action.payload
            }

        case GET_DEPOSIT:
            return {
                ...state,
                depositItem: action.payload
            }

        default:
            return state;
    }
}
export default depositReducer;