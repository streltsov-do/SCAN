import React from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from 'react-responsive';

import DivFlex from "../../../../utils/DivFlex/DivFlex";
import { mediaMaxWidh } from "../../../../utils/consts";

const Span=styled.span`
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    @media (max-width: ${mediaMaxWidh}) {
        margin-left: ${props => props.m_left || 0}px;
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.32px;
    }
`
const DivFax=styled.div`
    width: 2px;
    height: 124px;
    background: #949494;
    opacity: 0.4;
    @media (max-width: ${mediaMaxWidh}) {
        height: ${154-75}px;
        margin-left: 0;
        margin-top: 75px;
        font-size: 16px;
        line-height: normal;
        letter-spacing: 0.32px;
    }
`

export default function CardResult(props) {
    const { period, all, risc, last, width} = props;

    const isMobile = useMediaQuery({maxWidth : mediaMaxWidh});

    return(
        <DivFlex
            width={width}
            render={
                <>
                    <DivFlex 
                        direction={isMobile?"row":"column"}
                        gap={isMobile?59:29}
                        width={width}
                        p_left={10}
                        // justify={isMobile?"center":""}
                        render={
                            <>
                                <Span>{period   }</Span>
                                <Span>{all      }</Span>
                                <Span>{risc     }</Span>
                            </>
                        }
                    />
                    {   
                        !(last || isMobile)&&<DivFax></DivFax>
                    }
                </>
            }
        />
    )
}