import React, {Component} from 'react';
import './Form.css';
import {connect} from 'react-redux';
import {totalPrice, dishesCount, cleanCart} from "../../store/actions/dishes";
import {postOrder} from "../../store/actions/order";

class Form extends Component {
  state = {
    name: '',
    email: '',
    street: '',
    number: ''
  };

  componentDidMount() {
    this.props.totalPriceShow();
    this.props.dishesCount();
  }

  valueChanged = event => this.setState({[event.target.name]: event.target.value});

  orderHandler = async (event) => {
    event.preventDefault();

    const orderInCart = [];

    for (let i in this.props.dishCount) {
      if (this.props.dishCount[i] > 0) {
        orderInCart.push(`блюдо: ${i}, количество: ${this.props.dishCount[i]}`)
      }
    }

    const order = {
      order: orderInCart,
      totalPrice: this.props.totalPrice,
      customer: {
        name: this.state.name,
        email: this.state.email,
        street: this.state.street,
        number: this.state.number,
      }
    };
    await this.props.postOrder(order);
    this.setState({name: '', email: '', street: '', number: ''});
    this.props.cleanCart();
  };

  render() {
    let form = (
      <form onSubmit={this.orderHandler}>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your name"
          value={this.state.name}
          onChange={this.valueChanged}
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your email"
          value={this.state.email}
          onChange={this.valueChanged}
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street address"
          value={this.state.street}
          onChange={this.valueChanged}
        />
        <input
          className="Input"
          type="text"
          name="number"
          placeholder="Your telephone number"
          value={this.state.number}
          onChange={this.valueChanged}
        />
        <button className="PostOrder">Создать заказ</button>
      </form>
    );

    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dishCount: state.cart.dishCount,
    totalPrice: state.cart.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dishesCount: () => dispatch(dishesCount()),
    totalPriceShow: () => dispatch(totalPrice()),
    postOrder: (order) => dispatch(postOrder(order)),
    cleanCart: () => dispatch(cleanCart())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);