import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducers } from "./reducers/cartReducers";

const reducer = combineReducers({
  cartReducers,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
