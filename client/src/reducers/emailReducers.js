import {
  EMAIL_LOADING,
  EMAIL_SUCCESS,
  EMAIL_FAIL,
  EMAIL_RESET,
} from "../actions/types";

export const emailReducers = (state = {}, action) => {
  switch (action.type) {
    case EMAIL_LOADING:
      return { loading: true };
    case EMAIL_SUCCESS:
      return { loading: false, sent: true };
    case EMAIL_FAIL:
      return { loading: false, error: action.payload };
    case EMAIL_RESET:
      return {};
    default:
      return state;
  }
};
