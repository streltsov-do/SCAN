import React from "react";
import styled from "styled-components/macro";

import DivFlex from "../../../../utils/DivFlex/DivFlex";


const Input1=styled.div`
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.03em;
    position: absolute;
    color:  ${props => props.$warning ? "#FF5959" : "black"};
    top:    ${props => props.top   || -9}px  ;
    left:   ${props => props.left  || -2 }px  ;
`

export default function Asterisk(props) {
    const {top, left, warning} = props;

    return(
        <DivFlex
            position='relative'
            render={
                <>
                    <DivFlex
                        position="relative"
                        width={13}
                        height={30}
                        render={
                            <Input1
                                top={top}
                                left={left}
                                $warning={warning}
                            >*</Input1>
                        }

                    />
                </>
            }
        />
    )
}