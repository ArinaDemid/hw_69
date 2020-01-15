import React from "react";

const TotalPrice = props => {
  return (
    <div className="TotalPrice">
      <hr></hr>
      <p className="TotalPrice-price">Доставка: 150 KGS</p>
      <p className="TotalPrice-price"><span className="TotalPrice-span">Итого: </span>{props.money} KGS</p>
    </div>
  )
};

export default TotalPrice;