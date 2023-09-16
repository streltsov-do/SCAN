import { styled } from "styled-components/macro";
import { MOBILE_WIDTH_BREAKPOINT } from "../utils/consts";

const HEADER_HEIGHT = 93;

const HeaderDiv = styled.div`
    width: auto;
    height: ${HEADER_HEIGHT}px;
    background: ${(props) => (props.opened === "true" ? "#029491" : "#FFFFFF")};
    padding: 0 40px 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-clip: border-box;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding: 0 26px 0 14px;
    }
`;

const NavUl = styled.ul`
    min-width: 170px;
    width: 236px;
    height: 17px;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 17px;
    margin-right: 10px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        display: none;
    }
`;
const NavLi = styled.li``;
const NavA = styled.a`
    text-decoration: none;
    color: ${(props) => (props.mobile ? "#fff" : "#000000")};
`;

const Logo = styled.img`
    width: 141px;
    height: 141px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 111px;
        height: 111px;
    }
`;
const MobileMenu = styled.div`
    height: ${494 - 93}px;
    background-color: #029491;
    position: absolute;
    top: ${(props) => props.top}px;
    left: 0;
    z-index: 30;
    width: 100%;
    padding: ${141 - 93}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MobileUl = styled.ul`
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    margin: 0 0 75px 0;
    gap: 26px;
`;
const MobileADiv = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    height: 18.75px;

    margin-bottom: 20.52px;
`;
const MobileA = styled.a`
    font-family: "Inter";
    letter-spacing: 0.16px;
    text-decoration: none;
    opacity: 0.4000000059604645;
    color: ${(props) => (props.mobile ? "#fff" : "#000000")};
`;
const MobileBtn = styled.button`
    width: 295px;
    height: 51.955px;
    border-radius: 5px;
    background: #7ce3e1;
    border-style: none;
    font-family: "Inter";
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.2px;
`;

export {
    HEADER_HEIGHT,
    HeaderDiv,
    NavUl,
    NavLi,
    NavA,
    Logo,
    MobileMenu,
    MobileUl,
    MobileADiv,
    MobileA,
    MobileBtn,
};
