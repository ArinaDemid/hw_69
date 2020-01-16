import axiosOrders from '../../axios-orders';
import { FETCH_DISHES_SUCCESS, 
        FETCH_DISHES_ERROR, 
        FETCH_DISHES_REQUEST, 
        DISHES_COUNT, 
        ADD_DISH, 
        DELETE_DISH,
        TOTAL_PRICE
      } 
from '../actions/actionsType';

export const fetchDishesSuccess = (dishes) => {
  return { type: FETCH_DISHES_SUCCESS, dishes };
};

export const fetchDishesError = (error) => {
  return { type: FETCH_DISHES_ERROR, error };
};

export const fetchDishesRequest = () => {
  return { type: FETCH_DISHES_REQUEST };
};

export const dishesCount = () => {
  return { type: DISHES_COUNT };
};

export const addDish = (dishName) => {
  return { type: ADD_DISH, dishName };
};

export const deleteDish = (dishName) => {
  return { type: DELETE_DISH, dishName };
};

export const totalPrice = () => {
  return { type: TOTAL_PRICE };
};

export const fetchDishes = () => {
  return dispatch => {
    dispatch(fetchDishesRequest());
    axiosOrders.get('/dishes.json').then(response => {
      dispatch(fetchDishesSuccess(response.data));
    }, error => {
      dispatch(fetchDishesError(error));
    });
  }
};
