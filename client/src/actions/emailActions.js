import { EMAIL_LOADING, EMAIL_SUCCESS, EMAIL_FAIL } from "./types";
import axios from "axios";

export const sendEmail = (email) => async (dispatch, getState) => {
  try {
    dispatch({ type: EMAIL_LOADING });
    await axios.post("/api/email", email);
    dispatch({ type: EMAIL_SUCCESS });
  } catch (error) {
    dispatch({
      type: EMAIL_FAIL,
      payload: error.response ? error.response.data.msg : "error sending email",
    });
  }
};
