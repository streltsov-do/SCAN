import styled from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

const Stats = styled.div`
    width: 175px;
    height: 63px;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 5px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 7px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 132px;
        height: 75px;
        flex-shrink: 0;
    }
`;

const Autorization = styled.div`
    min-width: 251px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Astyled = styled.a`
    color: #000000;
    opacity: 0.4;
    text-decoration: none;
`;
const Separator = styled.div`
    width: 2px;
    height: 26px;
    background: #029491;
    opacity: 0.6;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`;
const BtnLogin = styled.button`
    width: 65px;
    height: 26px;
    background: #7ce3e1;
    border-radius: 5px;
    border-style: none;

    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    letter-spacing: 0.01em;
`;

export { Stats, Autorization, Astyled, Separator, BtnLogin };
