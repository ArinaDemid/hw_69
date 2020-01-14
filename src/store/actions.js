import axiosOrders from '../axios-orders';

export const FETCH_DISHES_REQUEST = 'FETCH_DISHES_REQUEST';
export const FETCH_DISHES_SUCCESS = 'FETCH_DISHES_SUCCESS';
export const FETCH_DISHES_ERROR = 'FETCH_DISHES_ERROR';

export const fetchDishesSuccess = (dishes) => {
  return { type: FETCH_DISHES_SUCCESS, dishes };
};

export const fetchDishesError = (error) => {
  return { type: FETCH_DISHES_ERROR, error };
};

export const fetchDishesRequest = () => {
  return { type: FETCH_DISHES_REQUEST };
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
