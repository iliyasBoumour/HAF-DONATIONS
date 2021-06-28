import {
  PAYMENT_LOADING,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
  PAYMENT_RESET,
} from "../actions/types";

export const paymentReducers = (state = { payment: false }, action) => {
  switch (action.type) {
    case PAYMENT_LOADING:
      return { loading: true, payment: false };
    case PAYMENT_SUCCESS:
      return { loading: false, payment: true };
    case PAYMENT_FAIL:
      return { loading: false, error: action.payload, payment: false };
    case PAYMENT_RESET:
      return { payment: false };
    default:
      return state;
  }
};
