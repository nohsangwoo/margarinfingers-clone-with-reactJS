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
  background-color: white;
  font-size: 14px;
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
