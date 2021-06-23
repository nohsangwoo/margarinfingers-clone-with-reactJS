import React from 'react';
import styled from 'styled-components';

const ArrivalsContainer = styled.div`
  padding: 0 10px;
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 250;
`;
const UnderLine = styled.div`
  margin-top: 10px;
  width: 20px;
  height: 1px;
  border-bottom: 1px solid black;
`;
const NewArrivalsTitle = () => {
  return (
    <ArrivalsContainer>
      <TitleWrapper>
        <Title>NEW ARRIVALS</Title>
        <UnderLine></UnderLine>
      </TitleWrapper>
    </ArrivalsContainer>
  );
};

export default NewArrivalsTitle;
