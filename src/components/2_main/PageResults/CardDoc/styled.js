import styled from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

const Container = styled.div`
    width: 641px;
    height: 694px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 19px 0 35px 30px;
    border-radius: 10px;
    margin-bottom: 38px;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 335px;
        min-width: 335px;
        height: 694px;
        padding: 19px 10px 0 24px;
    }
`;

const DivDates = styled.div`
    display: flex;
    gap: ${(prop) => (prop.isMobile ? 2 : 14)}px;
`;
const Date = styled.div`
    height: 19px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #949494;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        min-width: 90px;
        font-size: 14px;
        line-height: normal;
        letter-spacing: 0.14px;
    }
`;
const Source = styled.div`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    text-decoration-line: underline;
    color: #949494;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 14px;
        line-height: normal;
        letter-spacing: 0.14px;
    }
`;
const Title = styled.h2`
    font-weight: 500;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: 0.02em;
    color: #000000;
    margin: 24px 0 14px 0;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 19px;
        line-height: normal;
        letter-spacing: 0.19px;
    }
`;
const DivTypes = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 14px;
    height: 22px;
`;
const Type = styled.div`
    padding: 0 11px 0 14px;
    height: 22px;
    background: ${(props) => props.bg};
    border-radius: 5px;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 132px;
        height: 20px;
        flex-shrink: 0;
        font-size: 10px;
        line-height: normal;
        letter-spacing: 0.1px;
    }
`;
const Img = styled.div`
    width: 581px;
    height: 158px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-image: url(${(props) => props.background});
    background-size: cover;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 297px;
        height: 158px;
        flex-shrink: 0;
    }
`;
const Desc = styled.div`
    width: 581px;
    height: 228px;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #000000;
    opacity: 0.5;
    background-size: auto;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 290px;
        font-size: 12px;
        line-height: normal;
        letter-spacing: 0.12px;
    }
`;
const Words = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;

    color: #949494;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 14px;
        font-weight: 400;
        line-height: normal;
    }
`;

const DivBtn = styled.div`
    position: absolute;
    bottom: 35px;
    width: ${(prop) => (prop.isMobile ? 335 - 24 * 2 : 338 + 223)}px;
`;

export {
    Container,
    DivDates,
    Date,
    Source,
    Title,
    DivTypes,
    Type,
    Img,
    Desc,
    Words,
    DivBtn,
};
