export const addTodo = (payload) => ({
  type: "todoList/add_todo",
  payload,
});
export const searchFilterChange = (text) => ({
  type: "filters/search_filters_change",
  payload: text,
});
