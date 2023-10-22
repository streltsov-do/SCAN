import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import { CARD_HEIGHT, DESC_WIDTH, DESC_HEIGHT } from "./consts";

import btnArrow from "../../../assets/ArrowRight.svg";

const Container = styled.div<{
    width: number;
    $margin_bottom: number;
}>`
    display: flex;
    width: ${(prop) => prop.width}px;
    margin-bottom: ${(prop) => prop.$margin_bottom}px;
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
const DescTitle = styled.span<{
    $margin_right: number;
}>`
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
        margin-right: ${(props) => props.$margin_right || 0}px;
    }
`;

const DivResults = styled.div<{ $mobile: boolean; width: number }>`
    display: flex;
    direction: ${(props) => (props.$mobile ? "row" : "column")};
    justify-content: center;
    align-items: center;
    width: ${(props) => props.width}px;
    min-width: ${(props) => (props.$mobile ? "154px" : "")};
    min-width: ${(props) => (props.$mobile ? 296 : 262)}px;
    margin-left: ${(props) => (props.$mobile ? 0 : DESC_WIDTH)}px;
    margin-top: ${(props) => (props.$mobile ? 75 : 0)}px;
`;

const LoaderDesc = styled.div<{
    width: number;
}>`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: center;
    width: ${(props) => props.width}px;
    padding-top: 11px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding-top: 0;
    }
`;

const Div = styled.div<{
    width: number;
}>`
    width: ${(props) => props.width}px;
    height: ${CARD_HEIGHT}px;
    position: relative;

    padding-top: 18px;
    padding-bottom: 18px;
    margin-left: ${DESC_WIDTH}px;

    > .slick-slider {
        > .slick-slide {
            width: 124px;
            height: 124px;
            margin: 0 0;
        }
        > .slick-list {
            margin: 0 0px;
            height: 124px;
        }

        > .slick-arrow {
            z-index: 100;
            content: "";
            color: red;
            width: 39px;
            height: 39px;
            padding: 0;
            border: none;
            border-radius: 0;
            background-color: transparent;
            background-image: url(${btnArrow});
        }
        > .slick-prev {
            transform: rotate(180deg);
            top: calc(124px / 2 - 39px / 2);
            left: calc(-4px - 133px - 39px);
            &:before {
                content: "";
            }
        }
        > .slick-next {
            right: calc(-39px - 4px);
            &:before {
                content: "";
            }
        }
    }

    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 296px;
        height: 75px;
        margin-left: 0;
        margin-top: 75px;
        padding-top: 28px;

        > .slick-slider {
            > .slick-slide {
                width: 124px;
                height: calc(154px - 75px);
            }
            > .slick-list {
                margin: 0 0px;
                height: calc(154px - 75px);
            }

            > .slick-prev {
                transform: rotate(180deg);
                top: -10px;
                left: -39px;
            }
            > .slick-next {
                top: 10px;
                right: calc(-39px + 2px);
            }
        }
    }
`;

export { Container, DivMain, Desc, DescTitle, DivResults, LoaderDesc, Div };
