const initialState = {
  search: "",
  state: "All",
  priorities: [],
};

const filterSilce = (state = initialState, action) => {
  switch (action.type) {
    case "filters/search_filters_change":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default filterSilce;
