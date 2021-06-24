import React from 'react';
import styled from 'styled-components';
import LookBookBG from '../../../asset/Background/LookbookBG.jpg';
const LookBookContainer = styled.div`
  margin-top: 70px;
  padding: 0 10px;
  width: 100%;
`;
const LoobookInfoWrapper = styled.div`
  height: 400px;
  background-image: url(${LookBookBG});
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  display: block;
  margin-bottom: 20px;
  padding-top: 120px;
  letter-spacing: 3px;
  font-weight: 300;
  color: #2f2f2f;
`;

const ShowNowBTN = styled.button`
  width: 160px;
  height: 42px;
  margin: 0 auto;

  margin-top: 50px;
  font-family: 'PT Sans', 'Nanum Gothic', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 20px 12px 20px;
  background: rgba(255, 255, 255, 0.8);
  letter-spacing: 3px;
  color: #2f2f2f;
  cursor: pointer;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: none;
  &:hover {
    background-color: #2f2f2f;
    color: white;
  }
`;

const LookBookInfo = () => {
  return (
    <LookBookContainer>
      <LoobookInfoWrapper>
        <Title>2021 SUMMER CAPSULE COLLECTION LOOKBOOK</Title>
        <ShowNowBTN>SHOW NOW</ShowNowBTN>
      </LoobookInfoWrapper>
    </LookBookContainer>
  );
};

export default LookBookInfo;
