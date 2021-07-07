import {
  USER_LOADED,
  USER_LOADING,
  LOGING_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGING_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  currentUser: localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null,
};

const authRed = (state = initialState, action) => {
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
    case LOGING_LOADING:
      return { isLoading: true };
    case LOGING_SUCCESS:
      return { currentUser: action.payload, isLoading: false };
    case LOGIN_FAIL:
      return { error: action.payload, isLoading: false };
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
export default authRed;
