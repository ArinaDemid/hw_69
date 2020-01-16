import {FETCH_DISHES_SUCCESS, FETCH_DISHES_REQUEST, FETCH_DISHES_ERROR } from "../actions/actionsType";

const initialState = {
  dishes: [],
  spinner: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DISHES_SUCCESS:
      return {...state, dishes: action.dishes, spinner: false};
    case FETCH_DISHES_REQUEST:
      return {...state, spinner: true};
    case FETCH_DISHES_ERROR:
      return {...state, spinner: false};
    default:
      return state;
  }
};
export default reducer;