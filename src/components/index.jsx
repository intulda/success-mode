import React from 'react';
import Card from './Card';
import '../css/default.css';
import '../css/common/layout.css';

const Assignment = () => {
  return (
    <div className="container">
      <h1 className="title">경매 리스트</h1>
      <ul className="product__container">
        <Card />
      </ul>
    </div>
  )
}

export default Assignment;
