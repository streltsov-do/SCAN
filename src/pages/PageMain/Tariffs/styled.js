import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

const GAP_DESKTOP = 37;
const GAP_MOBILE = 40;

const Container = styled.div`
    max-width: 1320px;
    height: 664px;
    position: relative;

    @media (max-width: 1320px) {
        height: calc(${512 * 2 + GAP_MOBILE * 3}px);
    }

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 375px;
        height: ${34 + 37 + 512 * 3 + GAP_MOBILE * 2 + 43}px;
    }
`;
const Title = styled.h1`
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 54px;
    margin-bottom: 70px;

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
        margin-bottom: 37px;
    }
`;
const RatesMain = styled.div`
    display: flex;
    justify-content: space-between;
    gap: ${GAP_DESKTOP}px;
    height: 540px;
    width: auto;
    position: relative;

    @media (max-width: 1320px) {
        display: grid;
        grid-template-columns: repeat(2, 415px);
        grid-template-rows: repeat(2, 540px);
        justify-content: start;
        column-gap: ${GAP_DESKTOP}px;
    }

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        display: flex;
        justify-content: space-between;
        gap: ${GAP_DESKTOP}px;
        flex-direction: column;
        justify-content: space-between;
        height: ${512 * 3 + GAP_MOBILE * 2}px;
        width: 335px;
        gap: ${GAP_MOBILE}px;
    }
`;

export { Container, Title, RatesMain };
