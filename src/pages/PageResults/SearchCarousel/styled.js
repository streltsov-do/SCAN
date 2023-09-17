import styled from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

const CARD_WIDTH = 131;
const CARD_HEIGHT = 124;

const DESC_WIDTH = 133;
const DESC_HEIGHT = 158;
const BTN_WIDTH = 39;

const Container = styled.div`
    display: flex;
    width: ${(prop) => prop.width}px;
    margin-bottom: ${(prop) => prop.m_bottom}px;
`;
const DivMain = styled.div`
    height: ${DESC_HEIGHT}px;
    background: #ffffff;
    border: 2px solid #029491;
    border-radius: 10px;
    display: flex;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        flex-direction: column;
        margin-left: ${38 - 14}px;
    }
`;
const Desc = styled.div`
    width: ${DESC_WIDTH}px;
    height: ${DESC_HEIGHT}px;
    background: #029491;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 17px 0 0 28px;
    position: absolute;
    top: -2px;
    left: -2px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        flex-direction: row;
        width: 298px;
        height: 75px;
        border-radius: 10px 10px 0px 0px;
        padding: 23px 18px 23px 13px;
        top: -1px;
        left: -1px;
        gap: 0;
    }
`;
const DescTitle = styled.span`
    font-family: "Inter";
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #ffffff;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 18px;
        line-height: normal;
        letter-spacing: 0.18px;
        margin-right: ${(props) => props.m_right || 0}px;
    }
`;

const DivResults = styled.div`
    display: flex;
    direction: ${(props) => (props.isMobile ? "row" : "column")};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width}px;
    min-width: ${(props) => (props.isMobile ? "154px" : "")};
    min-width: ${(props) => (props.isMobile ? 296 : 262)}px;
    margin-left: ${(props) => (props.isMobile ? 0 : DESC_WIDTH)}px;
    margin-top: ${(props) => (props.isMobile ? 75 : 0)}px;
`;

const LoaderDesc = styled.div`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: center;
    width: ${(props) => props.width};
    padding-top: 11px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding-top: 0;
    }
`;

const Div = styled.div`
    width: ${(props) => props.width}px;
    height: ${CARD_HEIGHT}px;
    position: relative;

    padding-top: 18px;
    padding-bottom: 18px;
    margin-left: ${DESC_WIDTH}px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 296px;
        height: 75px;
        margin-left: 0;
        margin-top: 75px;
        padding-top: 28px;
    }
`;

export {
    CARD_WIDTH,
    CARD_HEIGHT,
    DESC_WIDTH,
    DESC_HEIGHT,
    BTN_WIDTH,
    Container,
    DivMain,
    Desc,
    DescTitle,
    DivResults,
    LoaderDesc,
    Div,
};
