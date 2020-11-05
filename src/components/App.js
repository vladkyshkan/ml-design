import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import GlobalStyle from "./themes/globalStyle";
import Header from "./Header";
import Section from "./Section";
import Share from "./Share";
import Footer from "./Footer";
import content from "../data/content";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HeroScreen>
        <Wrapper>
          <HeroContent>
            <HeroTitle>
              <H1>
                ML+
                <br />
                &nbsp;Design
              </H1>
              <P>
                A collection of resources for intersection of design, user
                experience, machine learning and artificial intelligence
              </P>
              <BenefitsList>
                <BenefitItem>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.1"
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#6275FF"
                    />
                    <path
                      d="M10.4702 18.599C10.0787 18.599 9.70786 18.4163 9.47026 18.1013L6.25456 13.8524C5.83606 13.3007 5.94496 12.515 6.49756 12.0965C7.05106 11.6762 7.83676 11.7869 8.25526 12.3395L10.3712 15.1331L15.6911 6.59033C16.0574 6.00353 16.8314 5.82353 17.42 6.18983C18.0077 6.55523 18.1886 7.32923 17.8214 7.91783L11.5358 18.0068C11.318 18.3587 10.9409 18.5783 10.5278 18.5972C10.508 18.599 10.49 18.599 10.4702 18.599V18.599Z"
                      fill="#6275FF"
                    />
                  </svg>
                  90+ articles, books, videos & other useful links
                </BenefitItem>
                <BenefitItem>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      opacity="0.1"
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#6275FF"
                    />
                    <path
                      d="M10.4702 18.599C10.0787 18.599 9.70786 18.4163 9.47026 18.1013L6.25456 13.8524C5.83606 13.3007 5.94496 12.515 6.49756 12.0965C7.05106 11.6762 7.83676 11.7869 8.25526 12.3395L10.3712 15.1331L15.6911 6.59033C16.0574 6.00353 16.8314 5.82353 17.42 6.18983C18.0077 6.55523 18.1886 7.32923 17.8214 7.91783L11.5358 18.0068C11.318 18.3587 10.9409 18.5783 10.5278 18.5972C10.508 18.599 10.49 18.599 10.4702 18.599V18.599Z"
                      fill="#6275FF"
                    />
                  </svg>
                  Tools to experiment with machine learning
                </BenefitItem>
              </BenefitsList>
              <Buttons>
                <ButtonMain to="Articles" offset={30} smooth={true}>
                  Read more
                </ButtonMain>
                <ButtonSecondary
                  href="https://forms.gle/Vdj8hMJWcam2tcnz7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suggest a link{" "}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49994 9.75V9.75C8.74046 11.4084 11.0905 11.7472 12.749 10.5067C12.8925 10.3993 13.0282 10.2818 13.1549 10.155L15.4049 7.905V7.905C16.8437 6.41531 16.8025 4.0413 15.3128 2.6025C13.8596 1.19895 11.5557 1.19895 10.1024 2.6025L8.81244 3.885"
                      stroke="#6275ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 8.25003V8.25003C9.25945 6.59159 6.90937 6.2528 5.25093 7.49333C5.10738 7.60071 4.97171 7.71824 4.84497 7.84503L2.59497 10.095V10.095C1.15618 11.5847 1.19743 13.9587 2.68713 15.3975C4.14035 16.8011 6.44426 16.8011 7.89747 15.3975L9.17997 14.115"
                      stroke="#6275ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </ButtonSecondary>
              </Buttons>
            </HeroTitle>
            <ImageContainer>
              <img
                srcSet="images/hero-image.jpg 1x, images/hero-image@2x.jpg 2x"
                alt="Generative graphics"
              />
            </ImageContainer>
          </HeroContent>
        </Wrapper>
      </HeroScreen>
      <Wrapper>
        <SectionList>
          {Object.keys(content).map((key, index) => (
            <Section key={key} index={index} details={content[key]} />
          ))}
        </SectionList>
        <Share />
        <Footer />
      </Wrapper>
    </>
  );
}

const H1 = styled.h1`
  font-size: 120px;
  line-height: 100px;
  font-family: "SpaceMono", monospace;
  font-weight: 400;
  margin-bottom: 24px;
  color: #282d31;
  text-transform: uppercase;

  @media only screen and (max-width: 1120px) {
    font-size: 100px;
    line-height: 80px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 80px;
    line-height: 72px;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 420px) {
    font-size: 72px;
    line-height: 64px;
  }

  @media only screen and (max-width: 360px) {
    font-size: 64px;
    line-height: 56px;
  }
`;

const P = styled.p`
  font-size: 18px;
  line-height: 26px;
  margin: 0;
  max-width: 520px;

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const BenefitsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const BenefitItem = styled.li`
  font-size: 18px;
  line-height: 26px;
  margin: 16px 0 0 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ButtonMain = styled(Link)`
  color: #e5eaef;
  padding: 16px 80px;
  background: #6275ff;
  box-shadow: 10px 10px 30px #c3c7cb, -10px -10px 30px #ffffff;
  border: 0;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: #6275ff;
      background: #e5eaef;
      cursor: pointer;
      box-shadow: 10px 20px 40px #c3c7cb, -10px -20px 40px #ffffff;
      transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out,
        color 0.2s ease-in-out;
    }
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    display: block;
  }
`;

const ButtonSecondary = styled.a`
  color: #6275ff;
  padding: 16px 52px;
  background: rgba(98, 117, 255, 0.1);
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  border-radius: 10px;
  margin: 0 0 0 16px;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out;

  svg {
    position: relative;
    top: 5px;
    margin-left: 2px;
  }

  @media (hover: hover) {
    :hover {
      background: #e5eaef;
      cursor: pointer;
      box-shadow: 10px 20px 40px #c3c7cb, -10px -20px 40px #ffffff;
      transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out;
    }
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
    display: block;
    margin: 16px 0 0 0;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 32px;
  max-width: 1280px;

  @media only screen and (max-width: 768px) {
    padding: 0 16px;
  }
`;

const HeroScreen = styled.div`
  height: 100vh;
  max-height: 800px;
  background: #e5eaef;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 640px) {
    height: 640px;
  }
`;

const HeroTitle = styled.div`
  padding-top: 40px;
  z-index: 5;

  @media only screen and (min-height: 701px) {
    padding-top: 80px;
  }

  @media only screen and (max-width: 1120px) {
    padding-top: 80px;
  }

  @media only screen and (max-width: 540px) {
    padding-top: 32px;
  }
`;

const HeroContent = styled.div`
  display: flex;

  img {
    animation: rotate 90s infinite;

    @keyframes rotate {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
  }

  @media only screen and (max-width: 1120px) {
    img {
      animation: none;
    }
  }
`;

const ImageContainer = styled.div`
  margin: 110px 0 0 120px;
  clip-path: inset(-50px -50px -40px -50px);

  @media only screen and (min-height: 701px) {
    margin: 150px 0 0 120px;
  }

  @media only screen and (max-width: 1120px) {
    margin: 0;
    clip-path: none;
    position: absolute;
    top: 120px;
    left: 550px;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Buttons = styled.div`
  margin-top: 64px;

  @media only screen and (max-width: 540px) {
    margin-top: 32px;
  }
`;

const SectionList = styled.div`
  z-index: 5;
`;

export default App;
