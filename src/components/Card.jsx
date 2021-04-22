import React from 'react';
import '../css/product/card.css';
import Timer from "./Timer";
const Card = ({data}) => {
  return (
    <li className="product__card-wrap">
      <div className="product__card-image-wrap">
        <img src={data.imagePath}/>
        <div className="product__card-title-counter">
          <span>{Timer(data.closingTime)}</span>
        </div>
      </div>
      <div className="product__card-content">
        <p className="product__card-title">
          <span className="add">{data.tradingMethod}</span>
          {data.productName}
        </p>
        <p className="product__card-description">{data.description}</p>
        <p>{data.currentPrice}원</p>
      </div>
    </li>
  )
}

export default Card;
