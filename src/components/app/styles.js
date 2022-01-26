import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
  html{
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    color: ${(props) => props.theme.colorBlackForText};
  }
  `;
