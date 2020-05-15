import React from "react";
import styled from "styled-components";

const Section = (props) => {
  const { name, list } = props.details;

  return (
    <SectionStyled>
      <H2>{name}</H2>
      <ResourceLinkList>
        {Object.keys(list).map((key) => (
          <ResourceLink href={list[key].url}>
            <img src={list[key].image} alt={list[key].title} />
            <H3>{list[key].title}</H3>
            <P>{list[key].description}</P>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i)">
                <path
                  d="M5.33334 16H26.6667"
                  stroke="#F2F5FC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <g filter="url(#filter1_i)">
                <path
                  d="M18.6667 8L26.6667 16L18.6667 24"
                  stroke="#F2F5FC"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i"
                  x="4.33334"
                  y="15"
                  width="23.3333"
                  height="2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.73625 0 0 0 0 0.762083 0 0 0 0 0.775 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
                <filter
                  id="filter1_i"
                  x="17.6667"
                  y="7"
                  width="10"
                  height="28"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.73625 0 0 0 0 0.762083 0 0 0 0 0.775 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
          </ResourceLink>
        ))}
      </ResourceLinkList>
    </SectionStyled>
  );
};

const SectionStyled = styled.div`
  margin-top: 120px;
`;

const H2 = styled.h2`
  color: #2c89f5;
  font-size: 32px;
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
`;

const ResourceLink = styled.div`
  box-shadow: 20px 20px 60px #cbcfd1, -20px -20px 60px #ffffff;
  border-radius: 10px;
  height: 465px;
  position: relative;

  img {
    margin: 16px 16px 0;
  }

  svg {
    position: absolute;
    left: 16px;
    bottom: 24px;
  }
`;

export default Section;
