import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import MiddleArea from './components/HomeMiddleArea';
import LookBookInfo from './components/LookBookInfo';
import NewArrivals from './components/NewArrivals';

const HomeContainer = styled.div``;

const Insidecontainer = styled.div``;
const Home = () => {
  const basicUrl =
    'https://codingapple-shop.s3.ap-northeast-2.amazonaws.com/shopItem/';
  return (
    <HomeContainer>
      <Carousel />
      <Insidecontainer className="container">
        <MiddleArea />
        <NewArrivals choose={0} />
      </Insidecontainer>

      <LookBookInfo />

      <Insidecontainer className="container">
        <NewArrivals choose={1} />
      </Insidecontainer>
    </HomeContainer>
  );
};

export default Home;
