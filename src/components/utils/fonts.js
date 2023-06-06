import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// import FontInter from 'https://fonts.googleapis.com/css2?family=Inter&display=swap';

const FontInter = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url("https://fonts.googleapis.com/css2?family=Inter&display=swap")
    }
`
const FontFerry = createGlobalStyle`
    @font-face {
        font-family: 'Ferry';
        src: url('ferry_black.otf') format ('opentype')

    }
`

export {FontInter, FontFerry};