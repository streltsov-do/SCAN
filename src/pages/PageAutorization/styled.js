import styled from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

const Container = styled.div`
    display: flex;
    padding: 69px 0 80px 60px;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 22px;
        line-height: normal;
        letter-spacing: 0.44px;
        padding: 22px 0 0 14px;
        flex-direction: column;
    }
`;
// div
const Title = styled.div`
    width: 817px;
    height: 144px;
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.02em;
    margin-bottom: 13.9px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: auto;
        height: 104px;
        font-size: 22px;
        line-height: normal;
        letter-spacing: 0.44px;
        margin-bottom: 126px;
    }
`;
const ImgCharacters = styled.img`
    width: 321.76px;
    height: 342.03px;
    margin-left: ${172 - 69}px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        margin: 0 0 79px 0;
    }
`;
const Form = styled.form`
    width: 429px;
    height: 523px;
    padding: 25px;
    margin-left: -7px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    position: absolute;
    right: 141px;
    top: 69px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 335px;
        height: 504px;
        padding: 25px 0 0 15px;
        position: relative;
        right: 0;
        top: 0;
        margin: 0 0 49px 0;
    }
`;
const ImgLock = styled.img`
    width: 75.22px;
    height: 92.06px;
    position: absolute;
    top: -55px;
    left: -51px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        left: 81px;
        top: -${492 - 504 + 92.06}px;
    }
`;
const LinkContainer = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
`;
const LinkDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;
const LinkAuto = styled.a`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #${(props) => props.color};
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        letter-spacing: 0.28px;
    }
`;
const Line = styled.div`
    height: 2px;
    background-color: #${(props) => props.color};
    width: ${(props) => props.width}px;
`;
const Label = styled.label`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #949494;
    margin-bottom: ${(props) => props.m_bottom || 0};
    display: ${(props) => props.display || "inline"};
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 14px;
        line-height: normal;
        letter-spacing: 0.28px;
    }
`;
const Input = styled.input`
    width: 379px;
    height: 43px;
    background: #ffffff;
    border: 1px solid ${(props) => props.b_color};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: ${(props) => props.mrg_bottom}px;
    font-family: "Inter";
    letter-spacing: 0.01em;
    font-size: 17px;
    line-height: 20px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 305px;
    }
`;
const RestoreContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
`;
const LinkRestore = styled.a`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    text-decoration-line: underline;
    color: #5970ff;
    text-align: center;
    color: #5970ff;
`;

const ExtLoginDiv = styled.div`
    display: flex;
    gap: 10px;
`;
const BtnExtLogin = styled.button`
    width: 96px;
    height: 31px;
    border: 1px solid rgba(89, 112, 255, 0.51);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
`;
const ImgExtLogin = styled.img`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    margin-top: ${(props) => props.mrg_top}px;
    margin-left: ${(props) => props.mrg_left}px;
`;
const DivErr1 = styled.div`
    display: flex;
    color: #ff5959;
    justify-content: center;
    height: 17px;
`;
const DivErr2 = styled.div`
    display: flex;
    color: #ff5959;
    justify-content: center;
    height: 17px;
    margin-bottom: 7px;
`;

export {
    Container,
    Title,
    ImgCharacters,
    Form,
    ImgLock,
    LinkContainer,
    LinkDiv,
    LinkAuto,
    Line,
    Label,
    Input,
    RestoreContainer,
    LinkRestore,
    ExtLoginDiv,
    BtnExtLogin,
    ImgExtLogin,
    DivErr1,
    DivErr2,
};
