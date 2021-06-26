import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import { data } from "../projects";
export const addItemToCart = (itemId, amount) => async (dispatch, getState) => {
  //   try {
  //   TODO
  const item = data.find((i) => i._id === itemId);
  dispatch({ type: ADD_TO_CART, payload: { ...item, amount: Number(amount) } });
  localStorage.setItem("cart", JSON.stringify(getState().cartReducers.cart));
  //   } catch (error) {

  //   }
};
export const removeItemfromCart = (itemId) => async (dispatch, getState) => {
  //   try {
  //   const item = data.find((i) => i._id === itemId);
  dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  localStorage.setItem("cart", JSON.stringify(getState().cartReducers.cart));
  //   } catch (error) {

  //   }
};
