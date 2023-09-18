import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import PicTitle from "./pic1.png";

const Container = styled.div`
    height: 620px;
    display: flex;
    position: relative;
    padding-left: 9px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding: 0;
        width: auto;
        height: auto;
        flex-direction: column;
    }
`;
const DivTItle = styled.div`
    width: 743px;
    height: 593px;
    z-index: 2;
    padding-top: 18px;
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding-top: 0;
        width: auto;
        height: auto;
    }
`;
const Title = styled.h1`
    width: 743px;
    height: 288px;
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    line-height: 72px;
    letter-spacing: 0.01em;
    text-align: left;
    margin-bottom: 20px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: auto;
        height: auto;
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
        margin-bottom: 19px;
    }
`;
const TitleDesc = styled.h3`
    width: 550px;
    height: 48px;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 70px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: auto;
        height: auto;
        margin-bottom: 32px;
    }
`;

const TitleImgDiv = styled.div.attrs(({ left, right, width }) => ({
    style: {
        left: left,
        right: right,
        width: width,
    },
}))`
    max-width: 629px;
    height: 593px;
    z-index: 1;
    position: absolute;
    background-image: url(${PicTitle});
    background-size: cover;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        position: relative;
        height: 327.312px;
        margin-bottom: 55.39px;
    }
`;

export { Container, DivTItle, Title, TitleDesc, TitleImgDiv };
