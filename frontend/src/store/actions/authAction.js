import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: AUTH_START
    }
}
export const authSuccess = (token) => {
    return {
        type: AUTH_SUCCESS,
        token: token
    }
}
export const authFail = (err) => {
    return {
        type: AUTH_FAIL,
        error: err
    }
}
export const authLogout = () => {
    localStorage.removeItem('user');
    return {
        type: AUTH_LOGOUT
    }
}
export const authLogin = (uname, pword) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login/', { username: uname, password: pword })
            .then(res => {
                const token = res.data.key
                localStorage.setItem('token', token)

                dispatch(authSuccess(token))
            })
            .catch(err => {

                dispatch(authFail(err))
            }
            );
    }
}
export const authSignup = (uname, email, pword1, pword2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', { username: uname, email: email, password1: pword1, password2: pword2 })
            .then(res => {
                const token = res.data.key
                localStorage.setItem('token', token);
                dispatch(authSuccess(token))
            })
            .catch(err =>
                dispatch(authFail(err))
            )
    }
}