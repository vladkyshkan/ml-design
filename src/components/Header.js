import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import Burger from "./Burger";

function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderStyled>
      <HeaderContent>
        <Logo to="/" onClick={scrollToTop}>
          Machine Learning + Design
        </Logo>
        <Burger />
      </HeaderContent>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  height: 72px;
  padding: 24px 0;
  border-bottom: 1px solid #b9cbd9;
  z-index: 99;
  background-color: rgba(229, 234, 239, 0.7);
  backdrop-filter: blur(8px);

  @media only screen and (max-width: 640px) {
    height: 56px;
    padding: 16px 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 32px;
  max-width: 1280px;

  @media only screen and (max-width: 1024px) {
    align-items: center;
    display: block;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  @media (hover: hover) {
    :hover {
      cursor: pointer;
      color: #6275ff;
      transition: color 0.2s ease-in-out;
    }
  }
`;

export default Header;
