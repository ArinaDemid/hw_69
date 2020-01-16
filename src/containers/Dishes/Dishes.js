import React, {Component, Fragment} from 'react';
import './Dishes.css';
import Dish from '../../components/Dish/Dish';
import {connect} from "react-redux";
import {fetchDishes, dishesCount, addDish, deleteDish, totalPrice} from '../../store/actions/dishes';
import TotalPrice from '../../components/TotalPrice/TotalPrice';
import DishStatus from '../../components/DishStatus/DishStatus';
import Modal from '../../components/UI/Modal/Modal';
import Form from '../../components/Form/Form';

class Dishes extends Component{

  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchDishes();
    this.props.dishesCount();
  }

  showModal = () => {
    this.setState({showModal: true});
  };

  closeModal = () => {
    this.setState({showModal: false});
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
              <button className='placeOrder' onClick={this.showModal}>Place Order</button> 
            </div>
            : <p className='OrderEmpty'>Cart is empty!</p>}
          </div>
          {this.state.showModal ? 
            <Modal show={this.state.showModal} close={this.closeModal}>
              <Form ></Form>
            </Modal> 
            : null
          }
      </Fragment>
    );
  }
}

const mapStateToProps= state => {
  return {
    dishes: state.dishes.dishes,
    dishCount: state.cart.dishCount,
    totalPrice: state.cart.totalPrice
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