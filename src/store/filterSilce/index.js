const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterSilce = (state = initialState, action) => {
  switch (action.type) {
    case "filters/search_filters_change":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/status_filters_change":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/priorities_filters_change":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filterSilce;
