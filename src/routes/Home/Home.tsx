import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import MiddleArea from './components/HomeMiddleArea';
import LookBookInfo from './components/LookBookInfo';
import NewArrivals from './components/NewArrivals';
import Footer from '../../components/Footer';

const HomeContainer = styled.div``;

const Insidecontainer = styled.div``;
const Home = () => {
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
      <hr style={{ marginTop: '40px' }} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
