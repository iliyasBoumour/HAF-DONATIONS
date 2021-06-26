import {
    USER_LOADING,
    USER_LOADED,
    LOGING_SUCCESS,
    REGISTER_SUCCESS,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_ERRORS,
    AUTH_ERROR
} from './types';

import axios from 'axios';
import { history } from '../helpers/history';
import { returnErrors } from './errorActions';
//sign Up
export const register = (user) => (dispatch) => {
    axios.post('/api/register', user)
         .then((res) => {
             dispatch({
                 type: REGISTER_SUCCESS,
                 payload: res.data
             });
             dispatch({type: CLEAR_ERRORS});
         })
         .catch((err) => {
             dispatch({type: REGISTER_FAIL});
             dispatch(returnErrors(err.response.data, err.response.status));
         });   
};

//login
export const login = (user) => (dispatch) => {
    axios.post('/api/login', user)
         .then((res) => {
            dispatch({
                type: LOGING_SUCCESS,
                payload: res.data,
            });
            dispatch({ type: CLEAR_ERRORS });

            // history.push('/');
            // window.location.reload();
         })
         .catch((err) => {
            dispatch({ type: LOGIN_FAIL });
            dispatch(returnErrors(err.response.data, err.response.status));
         })
}