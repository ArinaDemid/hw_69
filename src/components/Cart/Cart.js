import React from "react";
import DishList from '../DishList/DishList';
import DishStatus from '../DishStatus/DishStatus';

const Cart = ({dishes, removeDish}) => {

  return dishes.map(dish => {
      const showDish = [];
      if (dish.count !== 0) {
          showDish.push( 
              <DishStatus 
                  key={dish.dish}
                  name={dish.dish}
                  count={dish.count}
                  summa={dish.count * DishList[dishes.findIndex(p => p.dish === dish.dish)].price}
                  remove={() => removeDish(dish.dish)}
              />
          );
      }
      return showDish;
  }).flat(); 
};
    
export default Cart;