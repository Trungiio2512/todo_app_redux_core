// redux core

// const initialState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filterSilce = (state = initialState, action) => {
//   switch (action.type) {
//     case "filters/search_filters_change":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/status_filters_change":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/priorities_filters_change":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterSilce;

// redux toolkit
import { createSlice } from "@reduxjs/toolkit";

const filterSilce = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const {
  searchFilterChange,
  statusFilterChange,
  prioritiesFilterChange,
} = filterSilce.actions;

export default filterSilce;
