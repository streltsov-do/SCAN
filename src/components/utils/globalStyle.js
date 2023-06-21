import { createGlobalStyle } from "styled-components";
import FontStyles from "./Fonts/FontStyles";

import Rectangle from './Rectangle.svg';

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
            /* text-decoration: underline; */
            /* opacity: 80%; */
            /* border-color: red; */
            /* transform: scale(1.05); */
        }
    }
    
    a {
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

    .hover_line{
    }

    // hiding arrows
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }

    /* ::-webkit-datetime-edit { padding: 1em; }
    ::-webkit-datetime-edit-fields-wrapper { background: silver; }
    ::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; }
    ::-webkit-datetime-edit-month-field { color: blue; }
    ::-webkit-datetime-edit-day-field { color: green; }
    ::-webkit-datetime-edit-year-field { color: purple; }
    ::-webkit-inner-spin-button { display: none; } */
    ::-webkit-calendar-picker-indicator { 
            background-image: ${Rectangle}
        }
`

export default GlobalStyle;
