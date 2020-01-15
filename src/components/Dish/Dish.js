import React, {Component} from "react";
import './Dish.css';

class Dish extends Component {
  render() {
    return (
      <div className="Dish_block">
        <img src={this.props.image} alt="dish" style={{width: '40%', padding: '5px'}}/>
        <div className="Dish_info">
          <h4 style={{textTransform: "capitalize"}}>{this.props.name}</h4>
          <p>KGS {this.props.price}</p>
        </div>
        <button className="addToCart" color="link" 
          onClick={this.props.add}
        >
          <i className="fas fa-cart-plus" style={{fontSize: '20px'}}>Add to cart</i>
        </button>
      </div>
    )
  }
};

export default Dish;