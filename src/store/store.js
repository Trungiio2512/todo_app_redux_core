import { createStore } from "redux";
import reducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const compose = composeWithDevTools();

const store = createStore(reducer, compose);

export default store;
