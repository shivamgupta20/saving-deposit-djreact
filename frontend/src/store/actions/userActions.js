import { GET_USER } from '../actions/actionTypes';
import { DEL_USER } from '../actions/actionTypes';
import { GET_USERS } from '../actions/actionTypes';
import { NEW_USER } from '../actions/actionTypes';
import { PUT_USER } from '../actions/actionTypes';

import axios from 'axios';


export const getUsers = () => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/deposituser/`)
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        })
        )
}

export const delUser = (userId) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/api/deposituser/${userId}`)
        .then(res => dispatch({
            type: DEL_USER,
            payload: res.data
        })
        )
        .catch(err => console.error(err))
}


export const getUser = (userId) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/deposituser/${userId}/`)
        .then(res =>
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        )
        .catch(err => console.error(err))

}

export const postUser = (userData) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/deposituser/', userData)
        .then(res =>
            dispatch({
                type: NEW_USER,
                payload: res
            })
        )
        .catch(err => console.error(err))
}

export const putUser = (userData, userId) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/deposituser/${userId}/`, userData)
        .then(res =>
            dispatch({
                type: PUT_USER,
                payload: res
            })
        )
        .catch(err => console.error(err))
}