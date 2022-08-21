// code redux core

// import { createStore } from "redux";
// import reducer from "./reducer";
// // library trung gian để debug code
// import { composeWithDevTools } from "redux-devtools-extension";

// const compose = composeWithDevTools();

// const store = createStore(reducer, compose);

// export default store;

//code redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
import filterSilce from "./filterSilce";
import todoSilce from "./todoSilce";

const store = configureStore({
  reducer: {
    filters: filterSilce.reducer,
    todoList: todoSilce.reducer,
  },
});

export default store;
