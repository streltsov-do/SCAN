import React from "react";
import styled from "styled-components/macro";
import DivFlex from "../../../../utils/DivFlex/DivFlex";
import { useState, useEffect } from "react";

// import Rectangle from './Rectangle.svg';
import ArrowDown from "../ArrowDown/ArrowDown";

const DropItem=styled.div`
    width: ${props => props.width || 242}px;
    height: 43px;
    background: #FFFFFF;
    border: 1px solid #C7C7C7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding-left: 22px;
    padding-right: 22px;
    
    text-align: ${props => props.align || "center"};
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.03em;
    /* color: rgba(148, 148, 148); */
    color: black;
`
const Div=styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 242px;
    height: 43px;
    left: 97px;
    top: 564px;
    background: #FFFFFF;
    border: 1px solid #C7C7C7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
`
const Btn=styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 242px;
    height: 43px;
    left: 97px;
    top: 564px;
    background: #FFFFFF;
    border: 1px solid #C7C7C7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    opacity: 100%;
    &:hover{
        background: #DFFFFF;
    }
`
    // const ArrowDown=styled.img`
    //     position: absolute;
    //     /* width: 13.74px;
    //     height: 13.74px; */
    //     /* background: #D9D9D9; */
    //     /* transform: rotate(-45deg); */
    //     /* bottom: 15.56px; */
    //     top: 15.56px;
    //     right: 15.56px;
    //     border-style: none;
    //     transform: rotate(${props => props.round}deg);
    // `
    const Trick=styled.div`
        position: absolute;
        width: 30px;
        height: ${8+13.74/2-1}px;
        background: #FFFFFF;
        top: 1px;
        /* bottom: ${15.56+13.74/2}px; */
        right: 5px;
        border-style: dashed;
        border-width: 2px 2px 0 0;
    `

const items=[
    "Позитивная",
    "Негативная",
    "Любая"
]

export default function DropDown(props) {

    const {tone, setTone} = props;

    const [showDrops, setShowDrops] = useState(false);

    function handleDrops(e) {
        e.preventDefault();
        setShowDrops(!showDrops);
    }

    function handleChoose(idx){
        setShowDrops(false);
        setTone(idx);
    }
    
    return(
        <DivFlex
            position="relative"
            zindex={2}
            render={
                <>
                    <DivFlex
                        width={242}
                        position="relative"
                        render={
                            <>
                                <Btn 
                                    onClick={handleDrops}
                                >
                                    {items[tone]}
                                    <ArrowDown 
                                        rotate={
                                            (showDrops.toString())
                                        }
                                    />
                                </Btn>
                                
                            </>
                        }
                    />
                    {showDrops?
                        <DivFlex
                            direction="column"
                            overflow_y="hidden"
                            position="absolute"
                            top={43}
                            height={43*3}
                            width={242}
                            background_color="#FFFFFF"
                            render={
                                items.map((item,index)=>
                                    <DivFlex
                                        key={index}
                                        width={242}
                                        top={43*index}
                                        height={43}
                                        position="absolute"
                                        render={
                                            <>
                                                <Btn
                                                    onClick={(e) => handleChoose(index)}
                                                >
                                                    {item}
                                                </Btn>
                                                
                                            </>
                                        }
                                    />
                                )
                            }
                        />
                    : 
                    <> </>
                    }
                </>
            }
        />
    )
}