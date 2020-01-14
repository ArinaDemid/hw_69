import React from "react";

const TotalPrice = props => {
  let price = props.money + 150;
  return (
    <div className="TotalPrice">
      <hr></hr>
      <p className="TotalPrice-price">Доставка: 150 KGS</p>
      <p className="TotalPrice-price"><span className="TotalPrice-span">Итого: </span>{price} KGS</p>
    </div>
  )
};

export default TotalPrice;