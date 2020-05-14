import React from "react";
import styled from "styled-components";

const ButtonNav = (props) => {
  return <NavButton href={`#${props.name}`}>{props.name}</NavButton>;
};

const NavButton = styled.a`
  color: #282d31;
  font-size: 15px;
  margin-left: 40px;
  text-decoration: none;

  :hover {
    color: #2c89f5;
    padding-bottom: 33px;
    border-bottom: 2px solid #2c89f5;
  }
`;

export default ButtonNav;
