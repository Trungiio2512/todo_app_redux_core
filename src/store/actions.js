export const addTodo = (payload) => ({
  type: "todoList/add_todo",
  payload,
});
export const searchFilterChange = (payload) => ({
  type: "filters/search_filters_change",
  payload,
});
export const statusFilterChange = (payload) => ({
  type: "filters/status_filters_change",
  payload,
});
export const prioritiesFilterChange = (payload) => ({
  type: "filters/priorities_filters_change",
  payload,
});
