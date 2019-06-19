export const UPDATE_DEPOSIT_FIELD = 'UPDATE_DEPOSIT_FIELD'
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD'

export function depositFieldUpdate(fname, fval) {
    return {
        type: UPDATE_DEPOSIT_FIELD,
        payload: {
            deposit: ({
                [fname]: fval
            })
        }
    }
}

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
