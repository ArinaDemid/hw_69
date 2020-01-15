import {FETCH_DISHES_SUCCESS} from "../actions/actionsType";

const initialState = {
  dishes: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DISHES_SUCCESS:
      return {...state, dishes: action.dishes};
    default:
      return state;
  }
};
export default reducer;