// redux core

// const initialState = [
//   {
//     id: 1,
//     name: "Learn JS",
//     completed: true,
//     priority: "Low",
//   },
//   {
//     id: 2,
//     name: "Learn HTML-CSS",
//     completed: true,
//     priority: "Medium",
//   },
//   {
//     id: 3,
//     name: "Learn REACT-JS",
//     completed: false,
//     priority: "High",
//   },
// ];

// const todoSilce = (state = initialState, action) => {
//   switch (action.type) {
//     case "todoList/add_todo":
//       return [...state, action.payload];
//     case "todoList/completed_todo":
//       return state.map((todo) => {
//         return todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo;
//       });
//     default:
//       return state;
//   }
// };

// export default todoSilce;

// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const todoSilce = createSlice({
  name: "todoList",
  initialState: [
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
      completed: false,
      priority: "High",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    completedTodo: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

export const { addTodo, completedTodo } = todoSilce.actions;
export default todoSilce;
