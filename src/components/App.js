import React from "react";
import styled from "styled-components";
import GlobalStyle from "./themes/globalStyle";
import Header from "./Header";
import Section from "./Section";
import Share from "./Share";
import Footer from "./Footer";
import content from "../data/content";
import illustration from "../data/images/illustration.svg";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroScreen>
        <Wrapper>
          <Header />
          <HeroTitle>
            <H1>ML + Design</H1>
            <P>
              A collection of resources for intersection of design, user
              experience, machine learning and artificial intelligence
            </P>
            <Buttons>
              <ButtonMain>Read more</ButtonMain>
              <ButtonSecondary>Suggest a link</ButtonSecondary>
            </Buttons>
          </HeroTitle>
        </Wrapper>
      </HeroScreen>
      <Wrapper>
        <SectionList>
          {Object.keys(content).map((key) => (
            <Section key={key} index={key} details={content[key]} />
          ))}
        </SectionList>
        <Share />
        <Footer />
      </Wrapper>
    </>
  );
}

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: "SpaceMono", monospace;
  margin-bottom: 8px;
  color: #2c89f5;
`;

const P = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  max-width: 520px;
`;

const ButtonMain = styled.button`
  color: #282d31;
  width: 286px;
  height: 50px;
  background: #e5eaf6;
  box-shadow: 20px 20px 40px #c3c7d1, -20px -20px 40px #f2f5fc;
  transition: box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  border: 0;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  :hover {
    color: #2c89f5;
    cursor: pointer;
    box-shadow: 20px 40px 60px #c3c7d1, -20px -40px 60px #f2f5fc;
    transition: box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;

const ButtonSecondary = styled.button`
  font-weight: bold;
  font-size: 12px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  margin-left: 48px;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #2c89f5;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 76rem;
`;

const HeroScreen = styled.div`
  height: 100vh;
  max-height: 700px;
  background: #e5eaf7;
  /* background-image: url(${illustration});
  background-position: 120% 300%;
  background-repeat: no-repeat;
  position: relative; */
`;

const HeroTitle = styled.div`
  margin-top: 184px;
`;

const Buttons = styled.div`
  margin-top: 48px;
`;

const SectionList = styled.div``;

export default App;
