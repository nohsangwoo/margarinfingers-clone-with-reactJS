import React from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';
import MiddleArea from './components/HomeMiddleArea';
import LookBookInfo from './components/LookBookInfo';
import NewArrivals from './components/NewArrivals';
import Footer from '../../components/Footer';

const HomeContainer = styled.div``;

const Insidecontainer = styled.div``;

const HandleTrickCarousel = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
`;
const HandleLeft = styled.div`
  position: relative;
  top: 0;
  z-index: 10;
  background-color: white;
`;

const EmptyArea = styled.div`
  position: relative;
  top: 0;
  z-index: 0;

  height: 140vh;
  border: 1px solid red;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HandleTrickCarousel>
        <Carousel />
      </HandleTrickCarousel>
      <EmptyArea></EmptyArea>
      <HandleLeft>
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
      </HandleLeft>
    </HomeContainer>
  );
};

export default Home;
