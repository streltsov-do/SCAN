import styled from "styled-components/macro";
import ImgSearchSvg from "./img/Search.svg";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
    width: ${(props) => (props.isMobile ? "375px" : "auto")};
    margin-top: ${(props) => !props.isMobile && "69px"};
    margin-right: 0;
    margin-bottom: ${(props) => !props.isMobile && "80px"};
    margin-left: ${(props) => !props.isMobile && "64px"};
`;

const DivMain = styled.div`
    position: relative;
    z-index: 5;
`;

const Title = styled.h1`
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.03em;
    width: 817px;
    height: 96px;
    margin-bottom: 25px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
        width: 361px;
        height: auto;
        margin-left: 14px;
        margin-bottom: 19px;
    }
`;

const TitleDesc = styled.h3`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    width: 534px;
    height: 48px;
    margin-bottom: 47px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 18px;
        line-height: normal;
        width: 297px;
        height: auto;
        margin-left: 14px;
        margin-bottom: 21px;
    }
`;

const ImgImgFoldersSvg = styled.img`
    position: absolute;
    right: 104.39px;
    bottom: 637.61px;
    z-index: 4;
`;

const ImgImgDocumentSvg = styled.img`
    position: absolute;
    top: ${132 - 69}px;
    right: 411px;
    z-index: 4;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 58.242px;
        height: 71.118px;
        top: 97px;
        left: 291px;
        right: auto;
    }
`;

const ImgSearch = styled.div`
    width: 442.573px;
    height: 470.214px;
    position: absolute;
    top: ${351 - 69}px;
    right: -7.59px;
    background-image: url(${ImgSearchSvg});
    background-size: cover;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: ${375 - 14 - 40.57}px;
        height: 403.279px;
        position: relative;
        top: 0;
        right: -40.57px;
        margin-bottom: 24.72px;
    }
`;

export {
    Container,
    DivMain,
    Title,
    TitleDesc,
    ImgImgFoldersSvg,
    ImgImgDocumentSvg,
    ImgSearch,
};
