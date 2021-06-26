import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export const cartReducers = (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      let newCart;
      const isExist = state.cart.find((pr) => pr._id === item._id);
      if (isExist) {
        newCart = state.cart.map((pr) => (pr._id === item._id ? item : pr));
      } else {
        newCart = [...state.cart, item];
      }
      return { cart: newCart };
    case REMOVE_FROM_CART:
      return { cart: state.cart.filter((pr) => pr._id !== action.payload) };
    default:
      return state;
  }
};
