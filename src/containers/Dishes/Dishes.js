import React, {Component, Fragment} from 'react';
import './Dishes.css';
import Dish from '../../components/Dish/Dish';
import {connect} from "react-redux";
import {fetchDishes, dishesCount, addDish, deleteDish, totalPrice} from '../../store/actions/dishes';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import DishStatus from '../../components/DishStatus/DishStatus';

class Dishes extends Component{

  componentDidMount() {
    this.props.fetchDishes();
    this.props.dishesCount();
  }
  
  render() {
    const stateDishes = this.props.dishes;
    let dishes = null;
    if (stateDishes) {
      dishes = (
        Object.keys(stateDishes).map(id => (
          <div className='Dish' key={id}>
            <Dish
              name={stateDishes[id].name}
              price={stateDishes[id].price}
              image={stateDishes[id].image}
              add={() => this.props.addDish(stateDishes[id].name)}
            />
          </div>
        ))
      );
    }

    const dishesInCart = [];

    for (let i in this.props.dishCount) {
      dishesInCart.push({type: i, count: this.props.dishCount[i]})
    }

    let dishStatus = null;
    if (this.props.dishCount) {
      dishStatus = (
        dishesInCart.map(dish => (
          dish.count !== 0 ? 
          <DishStatus
            key={dish.type}
            name={dish.type}
            count={dish.count}
            total={dish.count * this.props.dishes[Object.keys(this.props.dishes)[dishesInCart.findIndex(p => p.type === dish.type)]].price}
            remove={() => this.props.deleteDish(dish.type)}
          /> 
          : null
        ))
      );
    }
    
    return (
      <Fragment>
        <div className='DishesApp'>
          <div className='Dishes'>
            {dishes}
          </div>
          {(this.props.totalPrice > 150) ? 
            <div className='OrderBlock'>
              <p style={{fontSize: '18px', fontWeight: '600', textAlign: 'center'}}>Cart</p>
              {dishStatus}
              <TotalPrice money={this.props.totalPrice}/>
              <button className='placeOrder'>Place Order</button> 
            </div>
            : <p className='OrderEmpty'>Cart is empty!</p>}
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps= state => {
  return {
    dishes: state.dishes.dishes,
    dishCount: state.dishes.dishCount,
    totalPrice: state.dishes.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addDish: (dishName) => dispatch(addDish(dishName)),
    deleteDish: (dishName) => dispatch(deleteDish(dishName)),
    fetchDishes: () => dispatch(fetchDishes()),
    dishesCount: () => dispatch(dishesCount()),
    totalPriceShow: () => dispatch(totalPrice())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);