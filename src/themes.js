import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "white",
  fontColor: "#0e0d0d",
};
export const darkTheme = {
  body: "#1e1b1b",
  fontColor: "#f3f7fa",
};

export const lighterTheme = {
  body: "#f3f7fa",
  fontColor: "#0e0d0d",
};

export const darkerTheme = {
  body: "#1E1B1B",
  fontColor: "#f3f7fa",
};

export const GlobalStyles = createGlobalStyle`
    nav, .project_section{
        background-color: ${(props) => props.theme.body}
    }
`;

export const GlobalStylesAboutSection = createGlobalStyle`
body{
        background-color: ${(props) => props.theme.body}
    }
`;
