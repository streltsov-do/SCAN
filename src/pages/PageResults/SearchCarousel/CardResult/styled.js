import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

const Container = styled.div`
    display: flex;
    width: ${(prop) => prop.width}px;
`;

const DivMain = styled.div`
    display: flex;
    width: ${(prop) => prop.width}px;
    flex-direction: ${(prop) => (prop.mobile ? "row" : "column")};
    gap: ${(prop) => (prop.mobile ? 59 : 29)}px;
    padding-left: 10px;
`;
const Span = styled.span`
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        margin-left: ${(props) => props.m_left || 0}px;
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.32px;
    }
`;
const DivFax = styled.div`
    width: 2px;
    height: 124px;
    background: #949494;
    opacity: 0.4;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        height: ${154 - 75}px;
        margin-left: 0;
        margin-top: 75px;
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.32px;
    }
`;

export { Container, DivMain, Span, DivFax };
