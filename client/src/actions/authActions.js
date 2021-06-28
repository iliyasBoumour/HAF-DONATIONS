import {
  LOGING_SUCCESS,
  REGISTER_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
} from "./types";

import axios from "axios";
import { returnErrors } from "./errorActions";
//sign Up
export const register = (user) => (dispatch) => {
  axios
    .post("/api/register", user)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAIL });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//login
export const login = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/login", user);
    dispatch({ type: LOGING_SUCCESS, payload: data });
    localStorage.setItem("currentUser", JSON.stringify(data));
    dispatch({ type: CLEAR_ERRORS });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
    dispatch(returnErrors(err.response?.data, err.response?.status));
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  dispatch({ type: LOGOUT_SUCCESS });
};
