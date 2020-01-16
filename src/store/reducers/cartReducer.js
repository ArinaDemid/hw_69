import { DISHES_COUNT, 
        ADD_DISH, 
        DELETE_DISH, 
        TOTAL_PRICE, 
        ORDER_POST_REQUEST, 
        ORDER_POST_ERROR, 
        ORDER_POST_SUCCESS,
        SHOW_MODAL,
        CLOSE_MODAL,
        CLEAN_CART } 
from "../actions/actionsType";

const INITIAL_DISHES = {
  плов: 0,
  шакарап: 0,
  лепешка: 0
};

const INITIAL_PRICE = 150;

const initialState = {
  dishCount: {...INITIAL_DISHES},
  totalPrice: INITIAL_PRICE,
  loading: false
};

const DISHES_PRICES = {
  плов: 210,
  шакарап: 100,
  лепешка: 20
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case DISHES_COUNT:
      return {...state, dishCount: state.dishCount};
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
    case ORDER_POST_REQUEST:
      return {...state, loading: true};
    case ORDER_POST_ERROR:
      return {
        ...state,
        loading: false
      };
    case ORDER_POST_SUCCESS:
      return {
        ...state, 
        loading: false
      };
    case SHOW_MODAL:
      return {
        ...state, 
        loading: true
      };
    case CLOSE_MODAL:
      return {
        ...state, 
        loading: false
      };
    case CLEAN_CART:
      return {
        ...state, 
        totalPrice: INITIAL_PRICE,
        dishCount: {...INITIAL_DISHES}
      };
    default:
      return state;
  }
};
export default reducer;