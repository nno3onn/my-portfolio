import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`${css`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  ul,
  li {
    list-style-type: disc;
    list-style-position: inside;
  }

  body {
    font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    font-size: 16px;
    color: #444;

    transition: all 0.3s ease-in-out;
  }
`}`;
