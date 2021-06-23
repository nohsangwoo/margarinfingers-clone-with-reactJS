import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Carousel from '../components/carousel';
const Home = () => {
  const basicUrl =
    'https://codingapple-shop.s3.ap-northeast-2.amazonaws.com/shopItem/';
  return (
    <div>
      <Carousel />
      <Jumbotron className="background">
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              width="100%"
              src={`${basicUrl}02a204b76f0548e4290d9fea65452c7d.jpg`}
              alt=""
            />
            <h4>상품명</h4>
            <p>상품 설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img
              width="100%"
              src={`${basicUrl}103f8ad2d9ef7e4cff446a3b86ef3f42.jpg`}
              alt=""
            />
            <h4>상품명</h4>
            <p>상품 설명 & 가격</p>
          </div>{' '}
          <div className="col-md-4">
            <img
              width="100%"
              src={`${basicUrl}198f1778b0eec16aba69ee2b82ca52b2.jpg`}
              alt=""
            />
            <h4>상품명</h4>
            <p>상품 설명 & 가격</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
