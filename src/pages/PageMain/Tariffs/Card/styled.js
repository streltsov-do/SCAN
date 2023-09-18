import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

const CARD_WIDTH = 415;
const CARD_HEIGHT = 540;
const TITLE_HEIGHT = 132;

const CARD_MOBILE_WIDTH = 335;
const CARD_MOBILE_HEIGHT = 512;
const TITLE_MOBILE_HEIGHT = 132;

const Div = styled.div`
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;
    background: #ffffff;
    border: 2px solid #${(props) => props.color};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: ${CARD_MOBILE_WIDTH}px;
        height: ${CARD_MOBILE_HEIGHT}px;
    }
`;
const TitleDiv = styled.div`
    width: ${CARD_WIDTH}px;
    height: ${TITLE_HEIGHT}px;
    background: #${(props) => props.color};
    border-radius: 10px 10px 0px 0px;
    padding: 30px 0 0 30px;
    display: flex;
    position: relative;
    margin: -2px 0 0 -2px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: ${CARD_MOBILE_WIDTH}px;
        height: ${TITLE_MOBILE_HEIGHT}px;
    }
`;
const Title = styled.div`
    color: ${(props) => props.color};
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 10px;
`;
const TitleDesc = styled.div`
    color: ${(props) => props.color};
    font-size: 18px;
    line-height: 22px;
`;
const IconImg = styled.img`
    font-size: 18px;
    line-height: 22px;
    position: absolute;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    top: ${(props) => props.top}px;
    right: ${(props) => props.right}px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 59px;
        height: 53.181px;
        top: 13px;
        right: 5px;
    }
`;
const MainDiv = styled.div`
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT - TITLE_HEIGHT}px;
    padding: 33px 0 24px 30px;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: ${CARD_MOBILE_WIDTH}px;
        height: ${CARD_MOBILE_HEIGHT - TITLE_HEIGHT}px;
        padding: 20px 0 0 24px;
    }
`;
const Current = styled.div`
    position: absolute;
    width: 134px;
    height: 24px;
    background: #3ba5e0;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: 10px;
    top: 12px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 12px;
        right: 10px;
        top: 6px;
        width: 120px;
        height: 18px;
    }
`;
const PriceDiv = styled.div`
    display: flex;
    gap: 19px;
    margin-bottom: 10px;
    align-items: center;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        gap: 10px;
    }
`;
const PriceSale = styled.div`
    font-weight: 500;
    font-size: 30px;
    line-height: 36px;
    /* @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
                    font-size: 30px;
                    letter-spacing: 0.3px;
                } */
`;
const Price = styled.div`
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    text-decoration: line-through;
    opacity: 0.5;
    color: #000;
`;
const PriceInstallment = styled.div`
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 59px;
    height: 22px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-weight: 400;
        line-height: normal;
        display: flex;
        width: 276px;
        height: 44px;
        margin-bottom: 37px;
    }
`;
const TariffDesc = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 10px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 18px;
        letter-spacing: 0.18px;
        line-height: normal;
    }
`;
const TariffOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 55px;
`;
const OptionDiv = styled.div`
    display: flex;
`;
const Check = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 16px;
    }
`;
const OptionDecs = styled.div`
    font-size: 18px;
    line-height: 22px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.16px;
    }
`;

export {
    Div,
    TitleDiv,
    Title,
    TitleDesc,
    IconImg,
    MainDiv,
    Current,
    PriceDiv,
    PriceSale,
    Price,
    PriceInstallment,
    TariffDesc,
    TariffOptions,
    OptionDiv,
    Check,
    OptionDecs,
};
