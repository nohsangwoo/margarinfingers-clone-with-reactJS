import React from 'react';
import styled, { css } from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InsideContainer = styled.div`
  margin: 30px 0 30px 0;
  padding: 0 70px;
  display: flex;
`;
const FooterColumn = styled.div`
  flex: 1;
`;

const ContentsWrapper = styled.div``;

const EachContent = styled.div<{ index: number }>`
  ${props => {
    if (props.index === 0) {
      return css`
        font-size: 11px;
        font-family: 'PT Sans', sans-serif;
        letter-spacing: 1px;
        color: #000;
      `;
    } else {
      return css`
        line-height: 22px;
        font-size: 11px;
        font-family: 'Nanum Gothic', sans-serif;
        letter-spacing: 0;
      `;
    }
  }};
`;

const UnderLine = styled.div`
  height: 2px;
  border-bottom: 2px solid #b9b9b9;
  width: 12px;
  margin: 10px 0;
`;

const BottomContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px 0;
`;

const BottomContent = styled.div`
  font-size: 11px;
  color: #696969;
`;

const HighLight = styled.span`
  text-align: left;
  font-family: 'PT Sans', sans-serif;
  letter-spacing: 1px;
  font-size: 11px;
  text-transform: uppercase;
  color: #000;
`;

const HR = styled.hr`
  width: 100%;
`;

const Footer = () => {
  const ContentsList = [
    [
      { content: 'C.S CENTER' },
      { content: 'OPEN : MON-FRI AM10-PM6' },
      { content: 'EVERY WEEKEND, HOLIDAY OFF' },
    ],
    [
      { content: 'BANK ACCOUNT' },
      { content: '국민은행 220402-04-149969' },
      { content: '예금주 : 노상우' },
    ],
    [{ content: 'FOLLOW' }, { content: '인스타 아이콘, 블로그 아이콘' }],
    [
      { content: 'LINKS' },
      { content: '회사소개' },
      { content: '이용약관' },
      { content: '개인정보처리방침' },
      { content: '이용안내' },
      { content: '사업자정보확인' },
      { content: '배송조회' },
    ],
    [
      { content: 'COMPANY' },
      { content: '상호명 MARGARINFINGERS (마가린핑거스) 대표자 이주현' },
      { content: '개인정보책임관리자 노상우(nsgr12@naver.com)' },
      { content: '사업자 등록 번호 123-45-67890' },
      { content: '통신 판매 신고 번호 2010-서울마포-0608' },
      { content: '주소 서울시 마포구 토정로 3안길 17' },
      { content: '대표 전화 02-1234-5678' },
      { content: '이메일 nsgr12@naver.com' },
    ],
  ];
  return (
    <FooterContainer>
      <InsideContainer className="container">
        {ContentsList.map((columnData, columnIndex) => {
          return (
            <FooterColumn key={columnIndex}>
              {columnData.map((content, index) => {
                return (
                  <ContentsWrapper>
                    <EachContent key={index} index={index}>
                      {content.content}
                    </EachContent>
                    {index === 0 && <UnderLine />}
                  </ContentsWrapper>
                );
              })}
            </FooterColumn>
          );
        })}
      </InsideContainer>
      <HR />
      <BottomContentsWrapper className="container">
        <BottomContent>
          COPYRIGHT (C) 2020 <HighLight>MARGARINFINGERS</HighLight> ALL RIGHTS
          RESERVED / DESIGNED BY GA09 DESIGN
        </BottomContent>
        <BottomContent>Amazon Web Service</BottomContent>
      </BottomContentsWrapper>
    </FooterContainer>
  );
};

export default Footer;
