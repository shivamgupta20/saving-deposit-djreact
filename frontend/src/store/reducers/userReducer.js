import { GET_USER } from '../actions/actionTypes';
import { GET_USERS } from '../actions/actionTypes';
import { PUT_USER } from '../actions/actionTypes';
import { NEW_USER } from '../actions/actionTypes';
import { DEL_USER } from '../actions/actionTypes';

const initialState = {
    userItems: [],
    userItem: {}

}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                userItems: action.payload
            }

        case DEL_USER:
            return {
                ...state,
                userItems: action.payload
            }

        case NEW_USER:
            return {
                ...state,
                userItem: action.payload
            }

        case PUT_USER:
            return {
                ...state,
                userItem: action.payload
            }

        case GET_USER:
            return {
                ...state,
                userItem: action.payload
            }

        default:
            return state;
    }
}