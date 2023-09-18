import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

const Form = styled.form`
    width: 872px;
    height: 543px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 29px 0 0 44px;
    display: flex;
    gap: 11px;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 375px;
        height: 688px;
        padding: 32px 0 0 14px;
        margin-bottom: 24px;
        box-sizing: border-box;
    }
`;
const Div1 = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    width: ${(props) => (props.mobile ? 375 - 14 + "px" : "auto")};
`;
const DivRelative = styled.div`
    display: flex;
    position: relative;
`;
const DivRelativeCol = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
`;
const DivCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const DivDates = styled.div`
    display: flex;
    position: relative;
    flex-direction: ${(prop) => (prop.mobile ? "column" : "row")};
    gap: 20px;
`;
const DivDatePlaceholder = styled.div`
    display: ${(prop) => (prop.enable ? "flex" : "none")};
    position: absolute;
    top: 13px;
    left: ${(prop) => prop.left}px;
    color: #949494;
    opacity: 0.4000000059604645;
    letter-spacing: 0.42px;
`;
const Div2 = styled.div`
    display: ${(prop) => (prop.mobile ? "none" : "flex")};
    width: ${(prop) => (prop.mobile ? 375 - 14 + "px" : "auto")};
    position: relative;
    flex-direction: column;
    gap: 17px;
    margin-top: 9px;
`;
const DivBtn = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: ${(prop) => (prop.mobile ? 37 : 32) + "px"};
    right: ${(prop) => (prop.mobile ? 26 : 39) + "px"};
`;
const InputDesc = styled.div`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    margin-bottom: 20px;
    margin-top: ${(props) => props.m_top || 0}px;
    z-index: 0;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 18px;
        line-height: normal;
        letter-spacing: 0.36px;
    }
`;
const Input = styled.input`
    width: ${(props) => props.width || 242}px;
    height: 43px;
    background: #ffffff;
    border: 1px solid
        ${((props) => (!props.$valid ? "#FF5959" : "#C7C7C7")) || "#FF0203"};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding-left: 22px;
    padding-right: 22px;

    text-align: ${(props) => props.align || "center"};
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    color: ${(props) => (!props.$valid ? "#FF5959" : "black")};
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 335px;
        height: 43px;

        /* color: #949494; */
        font-size: 14px;
        line-height: normal;
        letter-spacing: 0.28px;
    }
`;
const InputErr = styled.div`
    height: 17px;
    width: 242px;
    text-align: center;
    position: absolute;
    bottom: ${-17 - 2}px;
    color: #ff5959;
    font-size: 14px;
    letter-spacing: 0.14px;
`;
const DivGray = styled.div`
    letter-spacing: 0.03em;
    color: #949494;
`;

export {
    Form,
    Div1,
    DivRelative,
    DivRelativeCol,
    Div2,
    DivBtn,
    InputDesc,
    Input,
    InputErr,
    DivGray,
    DivCenter,
    DivDates,
    DivDatePlaceholder,
};
