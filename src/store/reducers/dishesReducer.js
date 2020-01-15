import {FETCH_DISHES_SUCCESS, DISHES_COUNT, ADD_DISH, DELETE_DISH, TOTAL_PRICE} from "../actions/actionsType";

const INITIAL_DISHES = {
  плов: 0,
  шакарап: 0,
  лепешка: 0
};

const INITIAL_PRICE = 150;

const initialState = {
  dishes: [],
  dishCount: {...INITIAL_DISHES},
  totalPrice: INITIAL_PRICE,
};

const DISHES_PRICES = {
  плов: 210,
  шакарап: 100,
  лепешка: 20
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DISHES_SUCCESS:
      return {...state, dishes: action.dishes};
    case DISHES_COUNT:
      return {...state, dishes: state.dishCount};
    case ADD_DISH:
      return {
        ...state,
        dishCount: {
          ...state.dishCount,
          [action.dishName]: state.dishCount[action.dishName] + 1
        },
        totalPrice: state.totalPrice + DISHES_PRICES[action.dishName]
      };
    case DELETE_DISH:
      return {
        ...state,
        dishCount: {
          ...state.dishCount,
          [action.dishName]: state.dishCount[action.dishName] - 1
        },
        totalPrice: state.totalPrice - DISHES_PRICES[action.dishName]
      };
    case TOTAL_PRICE:
      return {...state, totalPrice: state.totalPrice};
    default:
      return state;
  }
};
export default reducer;