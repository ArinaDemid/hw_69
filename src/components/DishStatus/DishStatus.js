import React from "react";
import './DishStatus.css';

const DishStatus = props => {
  return (
    <div className='DishStatus-info'>
      <p className='DishStatus-name'>{props.name}</p>
      <p>x {props.count}</p>
      <p className='DishStatus-priceTotal'> = {props.total} KGS</p>
      <p className='DishStatus-remove' onClick={props.remove}><i className="DishStatus-icon fas fa-trash-alt"></i></p>
    </div>
  )
};

export default DishStatus;