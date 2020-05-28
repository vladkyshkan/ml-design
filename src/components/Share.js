import React from "react";
import styled from "styled-components";
import { FacebookShareButton, TwitterShareButton } from "react-share";

function Share() {
  const shareFacebook = () => {};

  const shareTwitter = () => {};

  const shareLink = () => {};

  return (
    <ShareStyled>
      <H2>Spread the word</H2>
      <ShareButtons>
        <ButtonShare>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2H15V2C12.2386 2 10 4.23858 10 7V7V10H7V14H10V22H14V14H17L18 10H14V7V7C14 6.44771 14.4477 6 15 6H18V2Z"
              stroke="#282D31"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonShare>
        <ButtonShare>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 3.00011V3.00011C22.0424 3.67559 20.9821 4.19222 19.86 4.53011V4.53011C18.2363 2.66317 15.4066 2.46597 13.5396 4.08965C12.5455 4.95427 11.9823 6.21268 12 7.53011V8.53011V8.53011C8.43066 8.62267 5.05202 6.92208 3 4.00011C3 4.00011 -1 13.0001 8 17.0001V17.0001C5.94053 18.3981 3.48716 19.099 1 19.0001C10 24.0001 21 19.0001 21 7.50011V7.50017C20.9991 7.22162 20.9723 6.94376 20.92 6.67017V6.67017C21.9406 5.66365 22.6608 4.39285 23 3.00011V3.00011Z"
              stroke="#282D31"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonShare>
        <ButtonShare>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 13V13C11.654 15.2112 14.7875 15.6629 16.9987 14.0089C17.1901 13.8657 17.371 13.709 17.54 13.54L20.54 10.54V10.54C22.4584 8.5537 22.4034 5.38835 20.4171 3.46996C18.4795 1.59855 15.4076 1.59855 13.47 3.46996L11.75 5.17996"
              stroke="#282D31"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 11V11C12.346 8.78879 9.21255 8.33707 7.0013 9.99111C6.8099 10.1343 6.62901 10.291 6.46002 10.46L3.46002 13.46V13.46C1.54163 15.4463 1.59664 18.6116 3.5829 20.53C5.52052 22.4015 8.5924 22.4015 10.53 20.53L12.24 18.82"
              stroke="#282D31"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonShare>
      </ShareButtons>
    </ShareStyled>
  );
}

const ShareStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 128px auto 0;

  @media only screen and (max-width: 640px) {
    margin-top: 64px;
  }
`;

const H2 = styled.h2`
  color: #6275ff;
  font-size: 32px;
  font-family: "SpaceMono", monospace;
  font-weight: 400;
  margin-bottom: 24px;

  @media only screen and (max-width: 640px) {
    font-size: 24px;
  }
`;

const ShareButtons = styled.div`
  display: flex;
`;

const ButtonShare = styled.button`
  width: 64px;
  height: 64px;
  background: #eff3f6;
  box-shadow: 10px 10px 30px #cbcfd1, -10px -10px 30px #ffffff;
  border: 0;
  border-radius: 100px;
  transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 24px;

  svg path {
    transition: stroke 0.2s ease-in-out;
  }

  :hover {
    cursor: pointer;
    box-shadow: 10px 20px 40px #c3c7d1, -10px -20px 40px #ffffff;
    transition: box-shadow 0.2s ease-in-out, background 0.2s ease-in-out;
    background: #6275ff;

    svg path {
      stroke: #eff3f6;
      transition: stroke 0.2s ease-in-out;
    }
  }
`;

export default Share;
