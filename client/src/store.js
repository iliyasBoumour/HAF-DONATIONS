import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducers } from "./reducers/cartReducers";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const reducer = combineReducers({
  cartReducers,
  authReducer,
  errorReducer,
});

const initState = { cartReducers: { cart } };
const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
