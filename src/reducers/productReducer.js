import * as apiType from "../constants/apiType";

var initialState = [];
var index;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case apiType.apiList:
      return action.products;

    case apiType.apiDelete:
      index = findIndexById(state, action.id);
      state.splice(index, 1);
      return [...state];

    case apiType.apiAdd:
      state.push(action.product);
      return [...state];

    case apiType.apiEdit:
      index = findIndexById(state, action.product.id);
      state[index] = action.product;
      return [...state];

    default:
      return state;
  }
};

var findIndexById = (state, id) => {
  var findIndexById = -1;
  if (state.length > 0) {
    state.forEach((item, index) => {
      if (item.id === id) findIndexById = index;
    });
  }
  return findIndexById;
};

export default reducer;
