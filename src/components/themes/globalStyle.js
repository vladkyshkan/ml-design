import { createGlobalStyle } from "styled-components";
import SpaceGroteskRegular from "../../fonts/SpaceGroteskRegular.woff";
import SpaceGroteskRegular2 from "../../fonts/SpaceGroteskRegular.woff2";
import SpaceGroteskBold from "../../fonts/SpaceGroteskBold.woff";
import SpaceGroteskBold2 from "../../fonts/SpaceGroteskBold.woff2";
import SpaceMonoBold from "../../fonts/SpaceMonoBold.woff";
import SpaceMonoBold2 from "../../fonts/SpaceMonoBold.woff2";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: "Space";
    font-style: normal;
    font-weight: 400;
    src: url(${SpaceGroteskRegular2}) format('woff2'), url(${SpaceGroteskRegular}) format('woff');
  }

  @font-face {
    font-family: "Space";
    font-style: normal;
    font-weight: 700;
    src: url(${SpaceGroteskBold2}) format('woff2'), url(${SpaceGroteskBold}) format('woff');
  }

  @font-face {
    font-family: "SpaceMono";
    font-style: normal;
    font-weight: 700;
    src: url(${SpaceMonoBold2}) format('woff2'), url(${SpaceMonoBold}) format('woff');
  }

  body {
    margin: 0;
    font-family: "Space", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F2F5FC;
    color: #282D31;
  }

  button:focus {
    outline: 0;
  }
`;

export default GlobalStyle;
