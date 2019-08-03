import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { dieOne, dieTwo } from "./reducers";
import thunk from "redux-thunk";

const reducers = combineReducers({ dieOne, dieTwo });

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
