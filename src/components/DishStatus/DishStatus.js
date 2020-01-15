import React from "react";
import './DishStatus.css';

const DishStatus = ({name, count, total, remove}) => {
  return (
    <div className='DishStatus-info'>
      <p className='DishStatus-name'>{name}</p>
      <p>x {count}</p>
      <p className='DishStatus-priceTotal'> = {total} KGS</p>
      <p className='DishStatus-remove' onClick={remove}><i className="DishStatus-icon fas fa-trash-alt"></i></p>
    </div>
  )
};

export default DishStatus;