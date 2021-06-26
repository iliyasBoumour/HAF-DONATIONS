import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducers } from "./reducers/cartReducers";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";

const reducer = combineReducers({
  cartReducers,
  authReducer,
  errorReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
