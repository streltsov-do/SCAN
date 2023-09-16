import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
    /* @font-face { */
        /* font-family: 'Inter'; */
        /* src:    url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500&display=swap') */
        /* src: url("/Inter/Inter-Italic.otf") format('opentype'); */
    /* } */
    
    /* @font-face { */
        /* font-family: 'Ferry'; */
        /* src: url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500&display=swap') */
        /* src: url('/Ferry/ferry_black.otf') format('opentype'); */
    /* } */
    @font-face {
        font-family: 'Ferry';
        src: url('./Ferry/Ferry-Black.eot');
        src: url('./Ferry/Ferry-Black.eot?#iefix') format('embedded-opentype')
             /* ,url('./Ferry/Ferry-Black.woff2') format('woff2')
             ,url('./Ferry/Ferry-Black.woff') format('woff')
             ,url('./Ferry/Ferry-Black.ttf') format('truetype') */
             ;
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('./Inter/Inter-Regular.eot');
        src: url('./Inter/Inter-Regular.eot?#iefix') format('embedded-opentype')
            /* ,url('./Inter/Inter-Regular.woff2') format('woff2')
            ,url('./Inter/Inter-Regular.woff') format('woff')
            ,url('./Inter/Inter-Regular.ttf') format('truetype') */
            ;
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    /* @font-face {
        font-family: 'Inter';
        src: url('Inter-Medium.eot');
        src: url('Inter-Medium.eot?#iefix') format('embedded-opentype'),
            url('Inter-Medium.woff2') format('woff2'),
            url('Inter-Medium.woff') format('woff'),
            url('Inter-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('Inter-Light.eot');
        src: url('Inter-Light.eot?#iefix') format('embedded-opentype'),
            url('Inter-Light.woff2') format('woff2'),
            url('Inter-Light.woff') format('woff'),
            url('Inter-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('Inter-Thin.eot');
        src: url('Inter-Thin.eot?#iefix') format('embedded-opentype'),
            url('Inter-Thin.woff2') format('woff2'),
            url('Inter-Thin.woff') format('woff'),
            url('Inter-Thin.ttf') format('truetype');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('Inter-Black.eot');
        src: url('Inter-Black.eot?#iefix') format('embedded-opentype'),
            url('Inter-Black.woff2') format('woff2'),
            url('Inter-Black.woff') format('woff'),
            url('Inter-Black.ttf') format('truetype');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    } */
`;

export default FontStyles;
