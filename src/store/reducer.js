const initialState = {
  filters: {
    search: "",
    state: "All",
    priorities: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn JS",
      completed: true,
      priority: "Low",
    },
    {
      id: 2,
      name: "Learn HTML-CSS",
      completed: true,
      priority: "Medium",
    },
    {
      id: 3,
      name: "Learn REACT-JS",
      completed: true,
      priority: "High",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/add_todo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filters/search_filters_change":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
