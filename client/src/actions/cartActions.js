import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_PAYMENT_METHOD,
  CLEAN_CART,
} from "./types";
import axios from "axios";
// import { data } from "../projects";
export const addItemToCart = (itemId, amount) => async (dispatch, getState) => {
  try {
    //   TODO
    // const item = data.find((i) => i._id === itemId);
    const { data } = await axios.get(`/api/projects/${itemId}`);
    dispatch({
      type: ADD_TO_CART,
      payload: { ...data, amount: Number(amount) },
    });
    localStorage.setItem("cart", JSON.stringify(getState().cartReducers.cart));
  } catch (error) {
    console.log(error);
  }
};
export const removeItemfromCart = (itemId) => async (dispatch, getState) => {
  //   try {
  // const item = data.find((i) => i._id === itemId);

  // const { data } = await axios.get(`/api/projects/${itemId}`);
  dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  localStorage.setItem("cart", JSON.stringify(getState().cartReducers.cart));
  //   } catch (error) {

  //   }
};
export const setPaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: SET_PAYMENT_METHOD,
    payload: data,
  });
};
export const cleanCart = () => (dispatch) => {
  localStorage.removeItem("cart");
  dispatch({
    type: CLEAN_CART,
  });
};
