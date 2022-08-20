import { combineReducers } from "redux";

import filterSilce from "./filterSilce";
import todoSilce from "./todoSilce";

// const reducer = (state = {}, action) => {
//   return {
//     filters: filterSilce(state.filters, action),
//     todoList: todoSilce(state.todoList, action),
//   };
// };

const reducer = combineReducers({
  filters: filterSilce,
  todoList: todoSilce,
});

export default reducer;
