import { UPDATE_USER_FIELD } from '../actions/actionTypes';

export default function userReducer(state, action) {
    switch (action.type) {

        case UPDATE_USER_FIELD:
            return {
                ...state,
                user: {

                }
            }

        default:
            return state;
    }
}

