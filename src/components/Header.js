import React from "react";
import styled from "styled-components";
import content from "../data/content";
import ButtonNav from "./ButtonNav";

function Header() {
  return (
    <HeaderStyled>
      <HeaderContent>
        <Logo>Machine Learning + Design</Logo>
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
  margin: 0 auto;
  padding: 16px 0;
  border-bottom: 1px solid #b9cbd9;
  z-index: 99;
  background-color: rgba(229, 234, 239, 0.7);
  backdrop-filter: blur(8px);
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 76rem;
  margin: 0 auto;
`;

const Logo = styled.p`
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Navigation = styled.div``;

export default Header;
