import { GET_DEPOSIT } from '../actions/actionTypes';
import { DEL_DEPOSIT } from '../actions/actionTypes';
import { GET_DEPOSITS } from '../actions/actionTypes';
import { NEW_DEPOSIT } from '../actions/actionTypes';
import { PUT_DEPOSIT } from '../actions/actionTypes';

import axios from 'axios';


export const getDeposits = () => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/deposit/`)
        .then(res => dispatch({
            type: GET_DEPOSITS,
            payload: res.data
        })
        )
}

export const delDeposits = (depositId) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/api/deposit/${depositId}`)
        .then(res => dispatch({
            type: DEL_DEPOSIT,
            payload: res.data
        })
        )
}


export const getDeposit = (depositId) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/deposit/${depositId}/`)
        .then(res =>
            dispatch({
                type: GET_DEPOSIT,
                payload: res.data
            })
        )
        .catch(err => console.error(err))

}

export const postDeposit = (depositData) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/deposit/', depositData)
        .then(res =>
            dispatch({
                type: NEW_DEPOSIT,
                payload: res
            })
        )
        .catch(err => console.error(err))
}

export const putDeposit = (depositData, depositId) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/deposit/${depositId}/`, depositData)
        .then(res =>
            dispatch({
                type: PUT_DEPOSIT,
                payload: res
            })
        )
        .catch(err => console.error(err))
}