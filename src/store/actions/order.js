import axiosOrders from '../../axios-orders';
import {ORDER_POST_SUCCESS,
        ORDER_POST_ERROR,
        ORDER_POST_REQUEST
      } 
from '../actions/actionsType';

export const orderPostSuccess = () => {
  return { type: ORDER_POST_SUCCESS };
};

export const orderPostError = () => {
  return { type: ORDER_POST_ERROR };
};

export const orderPostRequest = () => {
  return { type: ORDER_POST_REQUEST };
};

export const postOrder = order => {
  return async dispatch => {
    try {
      dispatch(orderPostRequest());
      await axiosOrders.post('/ordersDishes.json', order);
      dispatch(orderPostSuccess());
    } catch {
      dispatch(orderPostError());
    }
  }
};
