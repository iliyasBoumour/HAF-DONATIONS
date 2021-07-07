import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducers } from "./reducers/cartReducers";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import { paymentReducers } from "./reducers/paymentReducers";
import { emailReducers } from "./reducers/emailReducers";
import { projectsReducers } from "./reducers/projectsReducers";

const reducer = combineReducers({
  cartReducers,
  authReducer,
  errorReducer,
  paymentReducers,
  emailReducers,
  projectsReducers,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
