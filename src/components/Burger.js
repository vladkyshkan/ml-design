import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerStyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <Navigation open={open} />
    </>
  );
}

const BurgerStyled = styled.div`
  width: 21px;
  height: 21px;
  display: none;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    position: absolute;
    top: 24px;
    right: 32px;
    z-index: 199;
  }

  @media only screen and (max-width: 640px) {
    top: 16px;
    right: 16px;
  }

  div {
    width: 21px;
    height: 2px;
    background-color: #505b64;
    transform-origin: 1px;
    transition: all 0.3s linear;
    border-radius: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

export default Burger;
