import React from "react";
import styled from "styled-components/macro";
import { useState, useEffect, useRef } from "react";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import CardResult from "./CardResult/CardResult";
import ButtonArrow from "../../../utils/ButtonArrow/ButtonArrow";
import Loader from "../../../utils/Loading/Loader";
import { connect } from "react-redux";

import Slider from "react-slick";
// import css from "./Slider.css";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-styles.css";


const cardWidth = 131;
const cardHeight= 124;

const descWidth=133;
const descHeight=158;
const btnWidth=39;

const Container=styled.div`
    height: ${descHeight}px;
    background: #FFFFFF;
    border: 2px solid #029491;
    border-radius: 10px;
    display: flex;
    position: relative;
`
    const Desc=styled.div`
        width: ${descWidth}px;
        height: ${descHeight}px;
        background: #029491;
        border-radius: 10px 0px 0px 10px;
        display: flex;
        flex-direction: column;
        gap: 26px;
        padding: 17px 0 0 28px;
        position: absolute;
        top:    -2px;
        left:   -2px;
    `
        const DescTitle=styled.span`
            font-family: 'Inter';
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        `    
    const LoaderDesc=styled.div`
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        text-align: center;
        width: ${props => props.width};
        padding-top: 11px;
    `

    const Div=styled.div`
        width: ${props => props.width}px;
        height: ${cardHeight}px;
        margin-bottom: 107px;
        display: relative;
        
        padding-top: 18px;
        padding-bottom: 18px;
        margin-left: ${descWidth}px;
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
    const {parent_p_left, loading, state} = props;
    const cards = state.cards;

    const [displayNum,setDisplayNum] = useState(0);

    function handeResize(){
        const widthDobbyMax=window.innerWidth-descWidth - parent_p_left-2*btnWidth-30;
        let newDisplayNum=Math.floor(widthDobbyMax/cardWidth);
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
    }, [displayNum]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        row: 1,
        vertical: false,
        slidesToShow: displayNum,
        slidesToScroll: displayNum,
        height: cardHeight,
    };

    return (
        <DivFlex
            width={displayNum*(cardWidth)+descWidth}
            m_bottom={107}
            render={
                <Container>
                    <Desc>
                        <DescTitle>Период</DescTitle>
                        <DescTitle>Всего </DescTitle>
                        <DescTitle>Риски </DescTitle>
                    </Desc>
                    {
                        loading
                            ?
                                <DivFlex
                                    direction="column"
                                    justify="center"
                                    width={displayNum*cardWidth}
                                    render={
                                        <>
                                            <Loader 
                                                widthDiv={displayNum*cardWidth}
                                                widthLoader={50}
                                            />
                                            <LoaderDesc >Загружаем данные</LoaderDesc>
                                        </>
                                    }
                                />
                            :
                                <Div
                                    width={displayNum*cardWidth}
                                >
                                    <Slider {...settings}>
                                        {cards.map((item,index) =>
                                            <CardResult  
                                                key   ={index                 }
                                                width ={cardWidth             }
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
}

// export default connect(
//     state => ({
//         state : state.rSearch[state.rSearch.length-1]
//     }),
// )(SearchCarousel);