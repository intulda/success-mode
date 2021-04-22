import React, {useEffect, useState} from 'react';
import Card from './Card';
import '../css/default.css';
import '../css/common/layout.css';

const Assignment = () => {

  const [data, setData] = useState([]);

  const getAuctionData = async () => {
    return await fetch('https://rest.dealink.co.kr/auction/group/2?page=0&size=3&sort=createdDate,desc', {
      method: 'GET',
    });
  }

  useEffect(() => {
    const response = getAuctionData();
    console.log(response);
    response.then(res => res.json())
      .then(resJson => setData(resJson))
      .catch(e => console.error(e));

  }, [])

  return (
    <div className="container">
      <h1 className="title">경매 리스트</h1>
      <ul className="product__container">
        {
          data.length > 0 && data.map((obj, idx) => {
            console.log(obj,idx);
            return <Card key={obj.url} data={obj} />
          })
        }
      </ul>
    </div>
  )
}

export default Assignment;
