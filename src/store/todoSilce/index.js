const initialState = [
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
];

const todoSilce = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/add_todo":
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoSilce;
