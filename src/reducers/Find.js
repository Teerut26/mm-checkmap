const Find = (state = null, action) => {
  switch (action.type) {
    case "SET_DATA":
      return state = action.playload;
    default:
      return state
  }
};

export { Find };
