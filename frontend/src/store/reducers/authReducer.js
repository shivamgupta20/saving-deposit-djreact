import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../actions/actionTypes';

const initialState = {

    token: null,
    error: null,
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                token: null,
                error: null,
                loading: true
            }
        case AUTH_SUCCESS:
            return {
                token: action.token,
                error: null,
                loading: false
            }

        case AUTH_FAIL:
            return {
                token: null,
                error: action.error,
                loading: false
            }

        case AUTH_LOGOUT:
            return {
                token: null,
                error: null,
                loading: false
            }

        default: return state
    }
}

export default authReducer;