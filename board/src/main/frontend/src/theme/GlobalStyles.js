// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  bgColor: "#ffffff",
  textColor: "#333333",
};

export const darkTheme = {
  bgColor: "#1b1b1b",
  textColor: "black",
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    line-height: 1.5;
    margin: 0 auto;
   
    word-break: keep-all;
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

/*sidebar 헤더 */
.header_control{
      background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
}
.board
{
      background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
}

`;
