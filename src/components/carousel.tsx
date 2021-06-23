import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import CarouselImg1 from '../asset/carousel/carousel1.jpg';
import CarouselImg2 from '../asset/carousel/carousel2.jpg';
import CarouselImg3 from '../asset/carousel/carousel3.jpg';

const CarouselImg = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const carousel = () => {
  const intervalValue = 3000;
  return (
    <Carousel fade indicators={true}>
      <Carousel.Item interval={intervalValue}>
        <CarouselImg src={CarouselImg1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={intervalValue}>
        <CarouselImg src={CarouselImg2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={intervalValue}>
        <CarouselImg src={CarouselImg3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default carousel;
