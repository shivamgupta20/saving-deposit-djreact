import UPDATE_USER_FIELD from './actionTypes';

export function userFieldUpdate(fname, fval) {
    return {
        type: UPDATE_USER_FIELD,
        payload: {
            user: ({
                [fname]: fval
            })
        }
    }
}