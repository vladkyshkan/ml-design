import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const ButtonNav = ({ name, open, setOpen, size }) => {
  const isScroll = size > 1024;

  return (
    <StyledLink
      activeClass="active"
      to={`${name}`}
      offset={30}
      spy={true}
      smooth={isScroll}
      onClick={() => {
        if (!isScroll) {
          setOpen((open) => !open);
        }
      }}
    >
      {name}
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: #282d31;
  font-size: 15px;
  line-height: 21px;
  margin-left: 32px;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  @media (hover: hover) {
    :hover {
      cursor: pointer;
      color: #6275ff;
      transition: color 0.2s ease-in-out;
    }
  }

  &.active {
    color: #6275ff;
    padding-bottom: 25px;
    border-bottom: 2px solid #6275ff;
  }

  @media only screen and (max-width: 1024px) {
    margin: 16px 0 0 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid #b9cbd9;
    width: calc(100% - 64px);

    :nth-child(1) {
      margin-top: 80px;
    }

    &.active {
      padding-bottom: 16px;
      border-bottom: 1px solid #b9cbd9;
    }
  }

  @media only screen and (max-width: 640px) {
    margin-left: 16px;
    width: calc(100% - 32px);

    :nth-child(1) {
      margin-top: 64px;
    }
  }
`;

export default ButtonNav;
