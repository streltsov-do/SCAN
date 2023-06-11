import React from "react";
import styled from "styled-components/macro";
import { useState, useEffect, useRef } from "react";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import CardResult from "./CardResult/CardResult";
import ButtonArrow from "../../../utils/ButtonArrow/ButtonArrow";
import Loader from "../../../utils/Loading/Loader";


const Dobby=styled.div`
    display: flex;
    align-items: center;
    height: 158px;
    margin-bottom: 107px;
`
    const Container=styled.div`
        /* width: 1260px; */
        height: 158px;
        background: #FFFFFF;
        border: 2px solid #029491;
        border-radius: 10px;
        display: flex;
        position: relative;
    `
        const descWidth=133;
        const Desc=styled.div`
            width: ${descWidth}px;
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
    const {parent_p_left, loading} = props;
    const [width,setWidth] = useState(0);
    const [displayNum,setDisplayNum] = useState(0);
    const [arrSlice,setArrSlice] = useState([]);

    const ref = useRef(null);
    // let displayNum=0;
    
    function handleResize1(valNew,valOld){
        console.log("hr old=",valOld);
        console.log("hr new=",valNew);
        if ((valNew!=valOld)){
            console.log("yep");
            setDisplayNum(valNew);
        }
    }

    function handleResize2(){
        let newDisplayNum=Math.floor((ref.current.clientWidth-descWidth - parent_p_left)/cardWidth);
        let dn=displayNum;
        console.log("hr2 old=",dn);
        console.log("hr2 new=",newDisplayNum);
        if ((newDisplayNum!=displayNum) && (newDisplayNum>0)){
            console.log("yep2");
            setDisplayNum(newDisplayNum);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize2);
        
        return () => {
            document.removeEventListener('resize', handleResize2);
        };

    }, [displayNum]);

    useEffect(() => {
        window.addEventListener('load', handleResize2)

        return () => {
            document.removeEventListener('load', handleResize2);
        };
    }, []);

    return (
        <Dobby
            ref={ref}
        >
            <ButtonArrow onClick={handleClick(false)} rotate={180}/>
            <Container>
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
                                            widthDiv={displayNum*cardWidth}
                                            widthLoader={50}
                                        />
                                        <LoaderDesc width={displayNum*cardWidth}>Загружаем данные</LoaderDesc>
                                    </>
                                }
                            />
                        :
                        arr.slice(0,displayNum).map((item,index) => (
                            <CardResult
                                key   ={index       }
                                width ={cardWidth   }
                                period={item.period }
                                all   ={item.all    }
                                risc  ={item.risc   }
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