import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import content from "../data/content";
import ButtonNav from "./ButtonNav";

function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <HeaderStyled>
      <HeaderContent>
        <Logo onClick={scrollToTop}>Machine Learning + Design</Logo>
        <Menu>Menu</Menu>
        <Navigation>
          {Object.keys(content).map((key) => (
            <ButtonNav key={key} name={content[key].name} />
          ))}
        </Navigation>
      </HeaderContent>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #b9cbd9;
  z-index: 99;
  background-color: rgba(229, 234, 239, 0.7);
  backdrop-filter: blur(8px);

  @media only screen and (max-width: 640px) {
    padding: 8px 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 32px;
  max-width: 1280px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  line-height: 46px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    color: #6275ff;
    transition: color 0.2s ease-in-out;
  }
`;

const Navigation = styled.nav`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Menu = styled.p`
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;

export default Header;
