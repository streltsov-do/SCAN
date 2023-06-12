import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        /* src:    url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500&display=swap') */
        src: url("/Inter/Inter-Italic.otf") format('opentype');
    }
    
    @font-face {
        font-family: 'Ferry';
        /* src: url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500&display=swap') */
        src: url('/Ferry/ferry_black.otf') format('opentype');
    }
`

export default FontStyles;