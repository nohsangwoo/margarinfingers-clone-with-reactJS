import React from 'react';
import Carousel from './components/Carousel';
import MiddleArea from './components/HomeMiddleArea';
import NewArrivals from './components/NewArrivalsTitle';
import styled from 'styled-components';
import NewArrivalsPhotos from './components/NewArrivalsPhotos';

const HomeContainer = styled.div`
max-width`;
const Home = () => {
  const basicUrl =
    'https://codingapple-shop.s3.ap-northeast-2.amazonaws.com/shopItem/';
  return (
    <HomeContainer className="container">
      <Carousel />

      <MiddleArea />

      <NewArrivals />

      <NewArrivalsPhotos />

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
    </HomeContainer>
  );
};

export default Home;
