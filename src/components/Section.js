import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";

const Section = (props) => {
  const { name, list } = props.details;

  return (
    <SectionStyled id={`${name}`}>
      <H2>
        <Number>00{props.index + 1}</Number> {name}
      </H2>
      <ResourceLinkList>
        {Object.keys(list).map((key) => (
          <StyledTilt key={key}>
            <Tilt options={{ max: 15, scale: 1.05, speed: 600 }}>
              <a href={list[key].url} target="_blank" rel="noopener noreferrer">
                <ResourceLink href={list[key].url}>
                  <div>
                    <img
                      src={list[key].image}
                      alt={list[key].title}
                      height="132px"
                    />
                  </div>
                  <H3>{list[key].title}</H3>
                  <P>{list[key].description}</P>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33334 16H26.6667"
                      stroke="#BCC2C6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.6667 8L26.6667 16L18.6667 24"
                      stroke="#BCC2C6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </ResourceLink>
              </a>
            </Tilt>
          </StyledTilt>
        ))}
      </ResourceLinkList>
    </SectionStyled>
  );
};

const SectionStyled = styled.div`
  padding-top: 128px;

  @media only screen and (max-width: 640px) {
    padding-top: 64px;
  }
`;

const H2 = styled.h2`
  color: #282d31;
  font-size: 32px;
  font-family: "SpaceMono", monospace;
  font-weight: 400;

  @media only screen and (max-width: 640px) {
    font-size: 24px;
  }
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin: 16px;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0 16px;
  max-width: 520px;
  color: #505b64;

  @media only screen and (max-width: 640px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const Number = styled.span`
  color: #a5a9af;
`;

const ResourceLinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  a {
    text-decoration: none;
    color: #282d31;
  }

  @media only screen and (max-width: 1023px) {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;
    width: 110%;
    margin-left: -5%;
    margin-bottom: -64px;
    padding-bottom: 64px;
    gap: 0;
  }

  @media only screen and (max-width: 768px) {
    width: calc(100% + 32px);
    margin-left: -16px;

    &::-webkit-scrollbar {
      width: 0px;
      background: transparent;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
  }
`;

const StyledTilt = styled.div`
  @media only screen and (max-width: 1023px) {
    margin-left: 24px;
  }

  @media only screen and (max-width: 768px) {
    margin-left: 16px;

    &:nth-last-child(1) {
      padding-right: 16px;
    }
  }
`;

const ResourceLink = styled.div`
  box-shadow: 20px 20px 60px #cbcfd1, -20px -20px 60px #f8faff;
  border-radius: 10px;
  height: 420px;
  width: 286px;
  position: relative;
  background-color: #f8faff;

  div {
    border-radius: 10px;
  }

  img {
    margin: 16px 16px 0;
    border-radius: 10px;
  }

  svg {
    position: absolute;
    left: 16px;
    bottom: 24px;

    path {
      transition: stroke 0.3s ease-in-out;
    }
  }

  :hover {
    svg path {
      stroke: #6275ff;
      transition: stroke 0.3s ease-in-out;
    }
  }
`;

export default Section;
