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
} from "../actions/types";

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      // localStorage.removeItem("isAuth");
      return {
        ...state,
        token: null,
        user: null,
        isAuth: false,
        isLoading: false,
      };
    case LOGING_SUCCESS:
      return { currentUser: action.payload, isLoading: false };
    case LOGIN_FAIL:
      return { error: action.payload, isLoading: false };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}
