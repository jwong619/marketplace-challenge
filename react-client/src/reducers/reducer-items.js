// data from amazon

export default (state = [{id: 1, name: 'julia'}, {id: 2, name: 'stranger'}], action) => {
  switch (action.type) {
    case 'UPDATE_ITEMS_LIST': {
      state = state.payload;
      break;
    }
  }
  return state;
}