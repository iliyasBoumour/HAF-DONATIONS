import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGING_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    IS_AUTH,
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isLoading: false,
    isAuth: false,
    user: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_SUCCESS:
        case LOGING_SUCCESS:
            localStorage.setItem('token', action.payload.token);
           // localStorage.setItem("isAuth", true);
            return {
                ...state,
                ...action.payload.user,
                isAuth: true,
                isLoading: false
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
           // localStorage.removeItem("isAuth");
            return {
                ...state,
                token: null,
                user: null,
                isAuth: false,
                isLoading: false
            };
        default:
            return state;
    }
}

