import { createGlobalStyle } from "styled-components";
import FontStyles from "./Fonts/FontStyles";

import Rectangle1 from "../assets/Rectangle.svg";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inter', sans-serif;
        letter-spacing: 0.01em;
        font-size: 14px;
        line-height: 17px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
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

    input[type="date"]::-webkit-calendar-picker-indicator { 
        opacity: 1;
        display: block;
        width: 20px;
        height: 11px;
        border-width: thin;
        position: relative;
        right: -16px;
        top: 2px;
        z-index:1;
        background-image: url(${Rectangle1});
    }
    input[type="date"]::-webkit-calendar-picker-indicator:-moz-suppressed { 
        display: none;
    }
    
    input[type="date"]:in-range::-webkit-datetime-edit-year-field, 
    input[type="date"]:in-range::-webkit-datetime-edit-month-field, 
    input[type="date"]:in-range::-webkit-datetime-edit-day-field, 
    input[type="date"]:in-range::-webkit-datetime-edit-text { 	color: transparent; }
`;

export default GlobalStyle;
