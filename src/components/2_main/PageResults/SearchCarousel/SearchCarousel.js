import React from "react";
import styled from "styled-components/macro";
import { useState, useEffect, useRef } from "react";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import CardResult from "./CardResult/CardResult";
import ButtonArrow from "../../../utils/ButtonArrow/ButtonArrow";
import Loader from "../../../utils/Loading/Loader";
import { connect } from "react-redux";


const Dobby=styled.div`
    display: flex;
    align-items: center;
    height: 158px;
    margin-bottom: 107px;
    width: ${props => props.width || "auto"};
`
    const widthDesc=133;
    const widthBtn=39;
    const Container=styled.div`
        /* width: ${props => props.width}px; */
        height: 158px;
        background: #FFFFFF;
        border: 2px solid #029491;
        border-radius: 10px;
        display: flex;
        position: relative;
    `
        const Desc=styled.div`
            width: ${widthDesc}px;
            height: 158px;
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

const cardWidth = 131;

const handleClick = (val) => {
    // console.log(val?"alo":"nealo");
}

export default function SearchCarousel(props) {
    const {parent_p_left, loading, state} = props;
    const cards = state.docs;
    console.log("cards",cards);
    const [loaderWidth,setLoaderWidth] = useState(window.innerWidth-widthDesc - parent_p_left-2*widthBtn-30);
    const [displayNum,setDisplayNum] = useState(0);
    const [arrSlice,setArrSlice] = useState([]);

    const refN = useRef(null);

    function handeResize(){
        const widthCur=refN.current.offsetWidth;
        const widthDobbyMax=window.innerWidth-widthDesc - parent_p_left-2*widthBtn-30;
        setLoaderWidth(widthDobbyMax);
        let newDisplayNum=Math.floor(widthDobbyMax/cardWidth);
        newDisplayNum=(newDisplayNum>8)?8:newDisplayNum;
        let dn=displayNum;
        
        const widthMax = cardWidth*newDisplayNum;
        if ((newDisplayNum!=displayNum) && (newDisplayNum>0)){
            console.log("yep2");
            setDisplayNum(newDisplayNum);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [displayNum,loaderWidth]);

    useEffect(() => {
        // window.addEventListener('load', handeResize)
        // console.log("1111111111111111111111111111111111111111111")
        // return () => {
        //     window.removeEventListener('load', handeResize);
        // };
        handeResize();
    }, [displayNum,loaderWidth]);

    return (
        <Dobby
            ref={refN}
        >
            <ButtonArrow onClick={handleClick(false)} rotate={180}/>
            <Container
            >
                <Desc>
                    <DescTitle>Период</DescTitle>
                    <DescTitle>Всего </DescTitle>
                    <DescTitle>Риски </DescTitle>
                </Desc>

                <DivFlex
                    p_top={18}
                    p_bottom={18}
                    m_left={133}
                    render=
                    { 
                        loading
                        ?
                            <DivFlex
                                direction="column"
                                justify="center"
                                render={
                                    <>
                                        <Loader 
                                            widthDiv={loaderWidth}
                                            widthLoader={50}
                                        />
                                        <LoaderDesc >Загружаем данные</LoaderDesc>
                                    </>
                                }
                            />
                        :
                            cards.slice(0,displayNum).map((item,index) => (
                                <CardResult
                                    key   ={index               }
                                    width ={cardWidth           }
                                    period={state.date[index]   }
                                    all   ={item                }
                                    risc  ={state.docs[index]   }
                                    last  ={displayNum == index+1 }
                                />
                            ))
                    }
                />
            </Container>
            <ButtonArrow onClick={handleClick(true)}/>
        </Dobby>
    )
}

// export default connect(
//     state => ({
//         state : state.rSearch[state.rSearch.length-1]
//     }),
// )(SearchCarousel);