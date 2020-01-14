import React, {Component, Fragment} from 'react';
import './Dishes.css';
import Dish from '../../components/Dish/Dish';
import {connect} from "react-redux";
import {fetchDishes} from '../../store/actions';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import DishStatus from '../../components/DishStatus/DishStatus';

class Dishes extends Component{

  state = {
    dishes: [
      {dish: 'Плов', count: 0},
      {dish: 'Шакарап', count: 0},
      {dish: 'Лепешка', count: 0}
    ],
    totalPrice: 0
  };

  componentDidMount() {
    this.props.fetchDishes();
  }

  addDish = (name) => {
    const dishes = [...this.state.dishes];
    dishes.forEach(item => {
      if (item.dish === name) item.count++;
    });

    let totalPrice = this.state.totalPrice;
    totalPrice = this.addTotal();

    this.setState({dishes, totalPrice});
  };

  addTotal = () => {
    let countPrice = 0;
    for (let i = 0; i < this.state.dishes.length; i++) {
      countPrice += this.props.dishes[Object.keys(this.props.dishes)[i]].price * this.state.dishes[i].count;
    }
    return countPrice;
  };

  removeDish = (name) => {
    const dishes = [...this.state.dishes];
    dishes.forEach(item => {
      if (item.dish === name && item.count !== 0) item.count--;
    });

    let totalPrice = this.state.totalPrice;
    totalPrice = this.addTotal();

    this.setState({dishes, totalPrice});
  };
  
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
              add={() => this.addDish(stateDishes[id].name, id)}
            />
          </div>
        ))
      );
    }

    let dishStatus = null;
    if (this.state.dishes) {
      dishStatus = (
        this.state.dishes.map(dish => (
          dish.count !== 0 ? 
          <DishStatus
            key={dish.dish}
            name={dish.dish}
            count={dish.count}
            total={dish.count * this.props.dishes[Object.keys(this.props.dishes)[this.state.dishes.findIndex(p => p.dish === dish.dish)]].price}
            remove={() => this.removeDish(dish.dish)}
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
          {(this.state.totalPrice !== 0) ? 
            <div className='OrderBlock'>
              <p style={{fontSize: '18px', fontWeight: '600', textAlign: 'center'}}>Cart</p>
              {dishStatus}
              <TotalPrice money={this.state.totalPrice}/>
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
    dishes: state.dishes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // submitTask: (event, taskText) => dispatch(submitTask(event, taskText)),
    // valueChange: (value) => dispatch(valueChange(value)),
    fetchDishes: () => dispatch(fetchDishes()),
    // addDish: (id) => dispatch(addDish())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);