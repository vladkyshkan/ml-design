import React from "react";
import styled from "styled-components";
import content from "../data/content";
import ButtonNav from "./ButtonNav";

const Navigation = ({ open, setOpen, size }) => {
  return (
    <NavigationStyled open={open}>
      {Object.keys(content).map((key) => (
        <ButtonNav
          key={key}
          name={content[key].name}
          open={open}
          setOpen={setOpen}
          size={size}
        />
      ))}
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  display: flex;

  @media only screen and (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    display: ${({ open }) => (open ? "flex" : "none")};
    animation: fadein 0.3s;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: rgba(229, 234, 239);

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export default Navigation;
