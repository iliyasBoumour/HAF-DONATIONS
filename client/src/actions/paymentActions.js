import { PAYMENT_LOADING, PAYMENT_SUCCESS, PAYMENT_FAIL } from "./types";
import axios from "axios";

export const pay = (paymentStatus) => async (dispatch, getState) => {
  try {
    dispatch({ type: PAYMENT_LOADING });
    if (paymentStatus.status === "COMPLETED")
      dispatch({ type: PAYMENT_SUCCESS });
    else dispatch({ type: PAYMENT_FAIL, payload: "payment error" });
    const { authReducer } = getState();

    const config = {
      headers: {
        Authorization: `HAFDON ${authReducer.currentUser.token}`,
      },
    };
    const { data } = await axios.get("/api/user", config);
  } catch (error) {
    dispatch({ type: PAYMENT_FAIL, payload: error.response });
  }
};
