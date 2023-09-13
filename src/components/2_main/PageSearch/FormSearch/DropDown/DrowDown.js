import React from "react";
import styled from "styled-components/macro";
import DivFlex from "../../../../utils/DivFlex/DivFlex";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import ArrowDown from "../ArrowDown/ArrowDown";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

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
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 335px;
    }
`

const items=[
    "Позитивная",
    "Негативная",
    "Любая"
]

export default function DropDown(props) {

    const {tone, setTone} = props;

    const [showDrops, setShowDrops] = useState(false);

    const isMobile = useMediaQuery({maxWidth: MOBILE_WIDTH_BREAKPOINT});

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
                        width={isMobile?335:242}
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
                            width={isMobile?335:242}
                            background_color="#FFFFFF"
                            render={
                                items.map((item,index)=>
                                    <DivFlex
                                        key={index}
                                        width={isMobile?335:242}
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