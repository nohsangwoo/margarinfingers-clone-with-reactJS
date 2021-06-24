import React from 'react';
import styled from 'styled-components';
import LeftPicture from '../../../asset/MiddleInHome/left.jpg';
import RightPicture from '../../../asset/MiddleInHome/right.jpg';

const MiddleContainer = styled.div`
  padding: 0 10px;
  margin-bottom: 100px;
`;
const AboutButtonArea = styled.div`
  width: 100%;
  height: 238px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutUsBTN = styled.button`
  width: 164px;
  height: 58px;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  font-size: 14px;
  border: 2px solid #94c0c1;
  &:hover {
    background-color: #94c0c1;
  }
`;

const PicturesWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
`;

const PictureItem = styled.img`
  padding: 0 20px;
`;

const HomeMiddleArea = () => {
  return (
    <MiddleContainer>
      <AboutButtonArea>
        <AboutUsBTN>ABOUT US</AboutUsBTN>
      </AboutButtonArea>
      <PicturesWrapper>
        <PictureItem src={LeftPicture} alt="" />
        <PictureItem src={RightPicture} alt="" />
      </PicturesWrapper>
    </MiddleContainer>
  );
};

export default HomeMiddleArea;
