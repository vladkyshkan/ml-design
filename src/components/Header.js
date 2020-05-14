import React from "react";
import styled from "styled-components";
import content from "../data/content";
import ButtonNav from "./ButtonNav";

function Header() {
  return (
    <HeaderStyled>
      <Logo>Machine Learning + Design</Logo>
      <Navigation>
        {Object.keys(content).map((key) => (
          <ButtonNav key={key} name={content[key].name} />
        ))}
      </Navigation>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  width: 100%;
  max-width: 76rem;
  padding: 20px 0;
  border-bottom: 1px solid #b9cbd9;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
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
