import React from 'react';
import styled from 'styled-components';
import NewArrivalsData from '../../../fakeData/newArrival1';

const PhotosContainer = styled.div`
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const Photo = styled.img.attrs(props => ({ src: props.src }))`
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* position: absolute; */
  /* display: inline; */
  width: 308px;
  height: 506.67px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

const PhotoHover = styled.img.attrs(props => ({ src: props.src }))`
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* display: none; */
  position: absolute;
  z-index: 1;
  left: 0;
  opacity: 0;
  width: 308px;
  height: 506.67px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
`;

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

const WrapperForHover = styled.div`
  width: 308px;
  height: 506.67px;
  display: flex;
  align-items: center;
  position: relative;
  &:hover ${PhotoHover} {
    opacity: 1;
  }
  &:hover ${Photo} {
    opacity: 0;
  }
`;

const DescriptionWrapper = styled.div`
  width: 308px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  width: 100%;
  font-size: 15px;
`;

const Price = styled.div`
  font-size: 13px;
  width: 100%;
`;

const NewArrivalsPhotos = () => {
  //   console.log(NewArrivalsData);
  return (
    <PhotosContainer>
      {NewArrivalsData.map((data, index) => {
        return (
          <PhotoWrapper>
            <WrapperForHover key={index}>
              <Photo src={data.basicSrc} alt="" />
              <PhotoHover src={data.hoverSrc} alt="" />
            </WrapperForHover>
            <DescriptionWrapper>
              <Title>{data.title}</Title>
              <Price>{`${data.price.toLocaleString()}원`}</Price>
            </DescriptionWrapper>
          </PhotoWrapper>
        );
      })}
    </PhotosContainer>
  );
};

export default NewArrivalsPhotos;
