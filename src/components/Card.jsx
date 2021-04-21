import React from 'react';
import '../css/product/card.css';
const Card = () => {


  const dummy = {
      "count": 1, // 찜한 사람 수
      "localDateTime": "2021-03-26T14:38:05", // 등록한 시간
      "startingPrice": "10000", // 상품 경매 시작가
      "currentPrice": "10000", // 상품 경매 현재가
      "closingTime": "2021-07-04T14:38:05", // 상품 경매 종료 시간
      "tradingMethod": "직거래", // 거래 방법
      "status": "PROCEEDING", // 경매 진행 상태
      "url": "2921a8d2-824a-4fbb-9039-666a4cd9984e-20210326143805", // 사용하지 않으셔도 됨
      "chatUrl": "https://open.kakao.com/o/gDbtKmTc", // 사용하지 않으셔도 됨
      "productName": "Usb to type C 케이블 1m, 미사용",// 상품 이름
      "description": "Usb to Type-C 케이블 미사용 제품입니다. \n\n책상에 두고 휴대폰, 패드 기기 등 충전하기 좋은 케이블,\n업무효율 +2\n\n거래위치: 304호", // 상품 설명
      "imagePath": "https://dealink-image.s3.ap-northeast-2.amazonaws.com/280/2021/03-26/2FFCAF9E-AA31-490A-A616-5E657315D593.jpeg", // 상품 이미지 url
      "groupIndex": 2 // 사용하지 않아도 됨
    }

  return (
    <li className="product__card-wrap">
      <div className="product__card-image-wrap">
        <img src={dummy.imagePath}/>
      </div>
      <div className="product__card-content">
        <p className="product__card-title">
          <span className="add">{dummy.tradingMethod}</span>
          {dummy.productName}
        </p>
        <p className="product__card-description">{dummy.description}</p>
        <p>{dummy.currentPrice}원</p>
      </div>
    </li>
  )
}

export default Card;
