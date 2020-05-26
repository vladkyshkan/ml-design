import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const ButtonNav = (props) => {
  return (
    <StyledLink
      activeClass="active"
      to={`${props.name}`}
      offset={30}
      spy={true}
      smooth={true}
    >
      {props.name}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: #282d31;
  font-size: 15px;
  margin-left: 40px;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: #6275ff;
    padding-bottom: 29px;
    border-bottom: 2px solid #6275ff;
  }

  &.active {
    color: #6275ff;
    padding-bottom: 29px;
    border-bottom: 2px solid #6275ff;
  }
`;

export default ButtonNav;
