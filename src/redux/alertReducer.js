//+ reducer is a pure fonction

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_ALERT':
      return [action.payload, ...state];
    case 'REMOVE_TO_ALERT':
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
