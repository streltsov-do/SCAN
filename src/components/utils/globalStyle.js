import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.01em;
        font-size: 14px;
        line-height: 17px;
        font-style: normal;
        font-weight: 400;
    }

    body *{
        margin: 0;
        box-sizing: border-box;
    }

    button {
        cursor: pointer;
        &:hover{
            text-decoration: underline;
            opacity: 80%;
            /* transform: scale(1.05); */
        }
    }

    .hover_line{
    }
`

export default GlobalStyle;
