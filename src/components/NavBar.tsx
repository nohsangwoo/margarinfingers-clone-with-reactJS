import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import MFLOGO from '../asset/logo.png';
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShopping,
} from 'react-icons/ai';
import { VscBookmark } from 'react-icons/vsc';

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  transition: all 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 100;
  &:hover {
    background-color: white;
  }
`;

const NavBarWrapper = styled.div`
  width: 1180px;
  display: flex;
  /* display: grid; */
  /* grid-template-columns: repeat(6, 1fr); */
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
`;

const LogoWrapper = styled.div``;
const LogoImg = styled.img`
  width: 8rem;
`;

const NavListWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 0 12rem;
  justify-content: space-between;
`;
const NavItemWrapper = styled.div``;
const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 0.8rem;
`;

const IconsWrapper = styled.div`
  display: flex;
`;
const IconBox = styled.div`
  &:nth-child(n + 2) {
    padding-left: 10px;
  }
`;

const NavBar = () => {
  const NavList = [
    { to: '/about', title: 'ABOUT' },
    { to: '/shop', title: 'SHOP' },
    { to: '/lookbook', title: 'LOOKBOOK' },
    { to: '/community', title: 'COMMUNITY' },
    { to: '/account', title: 'ACCOUNT' },
  ];

  const IconList = [
    { icon: AiOutlineSearch },
    { icon: AiOutlineHeart },
    { icon: AiOutlineShopping },
    { icon: VscBookmark },
  ];

  return (
    <Container>
      <NavBarWrapper>
        <LogoWrapper>
          <NavLink to="/">
            <LogoImg src={MFLOGO} />
          </NavLink>
        </LogoWrapper>
        <NavListWrapper>
          {NavList.map((navData, index) => {
            return (
              <NavItemWrapper key={index}>
                <NavLink to={navData.to}>{navData.title}</NavLink>
              </NavItemWrapper>
            );
          })}
        </NavListWrapper>
        <IconsWrapper>
          {IconList.map((data, index) => {
            return <IconBox>{<data.icon size="20" color="black" />}</IconBox>;
          })}
        </IconsWrapper>
      </NavBarWrapper>
    </Container>
  );
};

export default NavBar;
