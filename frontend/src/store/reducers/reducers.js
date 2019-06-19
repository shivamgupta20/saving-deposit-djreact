import { UPDATE_DEPOSIT_FIELD } from '../actions/actions';
import { UPDATE_USER_FIELD } from '../actions/actions';
import { combineReducers } from 'redux';



export default initialState = {
    deposits: {
        userid: 1,
        account_number: "",
        bankname: "",
        initial_amount: "",
        start_date: "",
        end_date: "",
        interest: "",
        tax: ""
    },
    users: {
        first_name,
        last_name,
        email,
        role,
        password,
        googleId,
        facebookId,
        isEmailVerified,
        retryCount,
        emailVerificationCode
    }
}

export default function depositReducer(state = initialState, action) {
    switch (action.type) {

        case UPDATE_DEPOSIT_FIELD:
            return {
                ...state,
                deposit: {
                    userid: 1,
                    account_number: "",
                    bankname: "",
                    initial_amount: "",
                    start_date: "",
                    end_date: "",
                    interest: "",
                    tax: ""
                }
            }

        default:
            return state;
    }
}

export default function userReducer(state = initialState, action) {
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



const rootReducer = combineReducers({
    depositReducer,
    userReducer
})

export default rootReducer;