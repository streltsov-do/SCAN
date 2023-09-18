import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import Perfect from "./perfect.svg";

const Container = styled.div`
    width: auto;
    height: ${349 + 575.52 + 70 * 2}px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 375px;
        display: block;
        margin-bottom: 80.48px;
        height: auto;
        padding-left: 14px;
    }
`;

const Title = styled.h1`
    margin-right: 9px;
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 54px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
        margin-bottom: 32px;
    }
`;

const PerfectImg1 = styled.div`
    height: 575.52px;
    max-width: 1320px;
    background-image: url(${Perfect});
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        background-size: cover;
        width: ${375 - 14}px;
        height: 392.522px;
    }
`;

export { Container, Title, PerfectImg1 };
