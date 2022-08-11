import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        /* box-shadow: 0 0 0 2px ${(props) => props.theme["blue-500"]}; */
    }

    body {
        background-color: ${(props) => props.theme["base-background"]};
        color: ${(props) => props.theme["base-title"]};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input-security, textarea, button {
        font: 400 1rem "Nunito", sans-serif;
    }

    p, span, h1, h2, h3, h4, h5, h6 {
        line-height: 160%;
    }

`;
