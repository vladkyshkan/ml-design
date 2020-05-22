import React from "react";
import styled from "styled-components";
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
              <Buttons>
                <ButtonMain href="#Resources">Read more</ButtonMain>
                <ButtonSecondary href="mailto:vladkyshkan@gmail.com">
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
                      stroke="#282D31"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.5 8.25003V8.25003C9.25945 6.59159 6.90937 6.2528 5.25093 7.49333C5.10738 7.60071 4.97171 7.71824 4.84497 7.84503L2.59497 10.095V10.095C1.15618 11.5847 1.19743 13.9587 2.68713 15.3975C4.14035 16.8011 6.44426 16.8011 7.89747 15.3975L9.17997 14.115"
                      stroke="#282D31"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>{" "}
                </ButtonSecondary>
              </Buttons>
            </HeroTitle>
            <img
              srcset="images/hero-image.jpg 1x, images/hero-image@2x.jpg 2x"
              alt=""
            />
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
  margin-bottom: 48px;
  color: #282d31;
  text-transform: uppercase;
`;

const P = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  max-width: 520px;
`;

const ButtonMain = styled.a`
  color: #e5eaef;
  padding: 16px 100px;
  background: #6275ff;
  box-shadow: 10px 10px 30px #c3c7cb, -10px -10px 30px #ffffff;
  transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out,
    color 0.2s ease-in-out;
  border: 0;
  border-radius: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;

  :hover {
    color: #6275ff;
    background: #e5eaef;
    cursor: pointer;
    box-shadow: 10px 20px 40px #c3c7cb, -10px -20px 40px #ffffff;
    transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out,
      color 0.2s ease-in-out;
  }
`;

const ButtonSecondary = styled.a`
  color: #282d31;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  background: transparent;
  margin-left: 48px;
  transition: color 0.2s ease-in-out;

  svg {
    position: relative;
    top: 5px;
    margin-left: 2px;

    path {
      transition: stroke 0.2s ease-in-out;
    }
  }

  :hover {
    color: #6275ff;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    svg path {
      stroke: #6275ff;
      transition: stroke 0.2s ease-in-out;
    }
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 76rem;
`;

const HeroScreen = styled.div`
  height: 100vh;
  max-height: 700px;
  background: #e5eaef;
`;

const HeroTitle = styled.div`
  padding-top: 80px;
`;

const HeroContent = styled.div`
  display: flex;

  img {
    margin: 80px 0 0 48px;
  }
`;

const Buttons = styled.div`
  margin-top: 48px;
`;

const SectionList = styled.div``;

export default App;
