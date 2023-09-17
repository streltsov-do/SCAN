import styled, { css } from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

const StatsFont = css`
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
`;

const StatsLogged = styled.div`
    width: 175px;
    height: 63px;
    display: ${(props) => (props.loading ? "none" : "flex")};
    padding: 14px 8px 15px 8px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding: 5px 0 0 10px;
    }
`;

const StatsDiv = styled.div`
    display: grid;
    grid-template-columns: calc(124px) 17px;
    gap: 9px 6px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }
`;

const StatsDesc = styled.span`
    font-size: 10px;
    line-height: normal;
    color: #000000;
    opacity: 0.4;
    z-index: 3;
    position: relative;
    letter-spacing: 0em;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 8px;
    }
`;

const StatsUsed = styled.span`
    ${StatsFont};
`;

const StatsLim = styled.span`
    ${StatsFont};
    color: #8ac540;
`;

export { StatsFont, StatsLogged, StatsDiv, StatsDesc, StatsUsed, StatsLim };
