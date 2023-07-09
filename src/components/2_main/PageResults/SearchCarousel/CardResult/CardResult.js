import React from "react";
import styled from "styled-components/macro";
import DivFlex from "../../../../utils/DivFlex/DivFlex";

const Span=styled.span`
    text-align: center;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
`
const DivFax=styled.div`
    width: 2px;
    height: 124px;
    background: #949494;
    opacity: 0.4;
`

export default function CardResult(props) {
    const { period, all, risc, last, width} = props;

    return(
        <DivFlex
            width={width}
            render={
                <>
                    <DivFlex 
                        direction="column"
                        gap={29}
                        width={width}

                        render={
                            <>
                                <Span>{period   }</Span>
                                <Span>{all      }</Span>
                                <Span>{risc     }</Span>
                            </>
                        }
                    />
                    {   
                        last
                        ? <></>
                        : <DivFax></DivFax>
                    }
                </>
            }
        />
    )
}