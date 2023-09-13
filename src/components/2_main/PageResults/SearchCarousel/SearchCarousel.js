import React from "react";
import styled from "styled-components/macro";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import CardResult from "./CardResult/CardResult";
import Loader from "../../../utils/Loading/Loader";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderResults.css";


const CARD_WIDTH = 131;
const CARD_HEIGHT= 124;

const DESC_WIDTH=133;
const DESC_HEIGHT=158;
const BTN_WIDTH=39;

const Container=styled.div`
    height: ${DESC_HEIGHT}px;
    background: #FFFFFF;
    border: 2px solid #029491;
    border-radius: 10px;
    display: flex;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        flex-direction: column;
        margin-left: ${38-14}px
    }
`
    const Desc=styled.div`
        width: ${DESC_WIDTH}px;
        height: ${DESC_HEIGHT}px;
        background: #029491;
        border-radius: 10px 0px 0px 10px;
        display: flex;
        flex-direction: column;
        gap: 26px;
        padding: 17px 0 0 28px;
        position: absolute;
        top:    -2px;
        left:   -2px;
        @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
            flex-direction: row;
            width: 298px;
            height: 75px;
            border-radius: 10px 10px 0px 0px;
            padding: 23px 18px 23px 13px;
            top:    -1px;
            left:   -1px;
            gap: 0;
        }
    `
        const DescTitle=styled.span`
            font-family: 'Inter';
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
            @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
                font-size: 18px;
                line-height: normal;
                letter-spacing: 0.18px;
                margin-right: ${props => props.m_right || 0}px;
            }
        `    
    const LoaderDesc=styled.div`
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-align: center;
        width: ${props => props.width};
        padding-top: 11px;
        @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
            padding-top: 0;
        }
    `

    const Div=styled.div`
        width: ${props => props.width}px;
        height: ${CARD_HEIGHT}px;
        position: relative;
        
        padding-top: 18px;
        padding-bottom: 18px;
        margin-left: ${DESC_WIDTH}px;
        @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
            width: 296px;
            height: 75px;
            margin-left: 0;
            margin-top: 75px;
            padding-top: 28px;
        }
    `

const arr=[
    {
        period: "10.09.2021",
        all:    5,
        risc:   0
    },
    {
        period: "13.09.2021",
        all:    2,
        risc:   0
    },
    {
        period: "17.09.2021",
        all:    6,
        risc:   0
    },
    {
        period: "20.09.2021",
        all:    8,
        risc:   2
    },
    {
        period: "12.10.2021",
        all:    1,
        risc:   0
    },
    {
        period: "15.10.2021",
        all:    10,
        risc:   2
    },
    {
        period: "16.10.2021",
        all:    4,
        risc:   0
    },
    {
        period: "17.10.2021",
        all:    3,
        risc:   0
    },
]

export default function SearchCarousel(props) {
    const {parent_p_left, loading, state, m_bottom} = props;
    const cards = state.cards;

    const [displayNum,setDisplayNum] = useState(1);

    const isMobile = useMediaQuery({maxWidth: MOBILE_WIDTH_BREAKPOINT});

    function handeResize(){
        const widthDobbyMax=window.innerWidth-DESC_WIDTH - parent_p_left-2*BTN_WIDTH-30;
        let newDisplayNum=Math.floor(widthDobbyMax/CARD_WIDTH);
        newDisplayNum=(newDisplayNum>8)?8:newDisplayNum;
        
        if ((newDisplayNum!=displayNum) && (newDisplayNum>0)){
            setDisplayNum(newDisplayNum);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [displayNum]);

    useEffect(() => {
        handeResize();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        row: 1,
        vertical: false,
        slidesToShow:   isMobile?1:displayNum,
        slidesToScroll: isMobile?1:displayNum,
        height:         isMobile?(154-75):CARD_HEIGHT,
    };

    const cWidth = displayNum*CARD_WIDTH;

    return (
        <DivFlex
            width={cWidth+DESC_WIDTH}
            m_bottom={m_bottom}
            render={
                <Container>
                    <Desc>
                        <DescTitle m_right={49+5}>Период</DescTitle>
                        <DescTitle m_right={20+5}>Всего </DescTitle>
                        <DescTitle m_right={0}>Риски </DescTitle>
                    </Desc>
                    {
                        loading
                            ?
                                <DivFlex
                                    direction={isMobile?"row":"column"}
                                    justify="center"
                                    width={cWidth}
                                    min_width={isMobile?296:262}
                                    m_left={isMobile?0:DESC_WIDTH}
                                    m_top={isMobile?75:0}
                                    align="center"
                                    height={isMobile?154:""}
                                    render={
                                        <>
                                            {/* TODO: Плавное уменьшение ширины лоадера */}
                                            <Loader 
                                                widthDiv={isMobile?50:((cWidth < 262)?262:displayNum*CARD_WIDTH)}
                                                min_widthDiv={isMobile?75:""}
                                                widthLoader={50}
                                            />
                                            {isMobile?
                                                <></>
                                            :
                                                <LoaderDesc
                                                    width={(cWidth)+"px"}
                                                >Загружаем данные
                                                </LoaderDesc>
                                            }
                                        </>
                                    }
                                />
                            :
                                <Div
                                    width={cWidth}
                                >
                                    <Slider {...settings} className="sliderResults">
                                        {cards.map((item,index) =>
                                            <CardResult  
                                                key   ={index                 }
                                                width ={isMobile?296:CARD_WIDTH}
                                                period={item.date             }
                                                all   ={item.docs             }
                                                risc  ={item.risk             }
                                                last  ={index+1 == displayNum }
                                            />
                                        )}
                                    </Slider>
                                </Div>
                    }
                </Container>
            }
        />
    )
};