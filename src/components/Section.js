import React from "react";
import styled from "styled-components";
import Tilt from "react-tilt";

const Section = (props) => {
  const { name, list } = props.details;

  return (
    <SectionStyled>
      <a id={`${name}`} href={`#${props.name}`} />
      <H2>{name}</H2>
      <ResourceLinkList>
        {Object.keys(list).map((key) => (
          <Tilt options={{ max: 10, scale: 1.03, speed: 600 }}>
            <a href={list[key].url} target="_blank" rel="noopener noreferrer">
              <ResourceLink href={list[key].url}>
                <div>
                  <img src={list[key].image} alt={list[key].title} />
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.6667 8L26.6667 16L18.6667 24"
                    stroke="#BCC2C6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </ResourceLink>
            </a>
          </Tilt>
        ))}
      </ResourceLinkList>
    </SectionStyled>
  );
};

const SectionStyled = styled.div`
  margin-top: 120px;
`;

const H2 = styled.h2`
  color: #6275ff;
  font-size: 36px;
  font-family: "SpaceMono";
  font-weight: 700;
`;

const H3 = styled.h3`
  font-weight: bold;
  font-size: 21px;
  line-height: 28px;
  margin: 16px;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0 16px;
  max-width: 520px;
`;

const ResourceLinkList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;

  a {
    text-decoration: none;
    color: #282d31;
  }
`;

const ResourceLink = styled.div`
  box-shadow: 20px 20px 60px #cbcfd1, -20px -20px 60px #f8faff;
  border-radius: 10px;
  height: 465px;
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
