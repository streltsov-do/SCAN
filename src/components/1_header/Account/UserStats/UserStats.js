import React from "react";
import styled, {css} from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

import Loader from "../../../utils/Loading/Loader";

import { mediaMaxWidh } from "../../../utils/consts";

const StatsFont = css`
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
`

const StatsLogged = styled.div`
    width: 175px;
    height: 63px;
    display: ${props => props.loading?'none':'flex'};
    padding: 14px 8px 15px 8px;
    @media (max-width: ${mediaMaxWidh}) {
        padding: 5px 0 0 10px;
    }
`   
    const StatsDiv=styled.div`
        display: grid;
        grid-template-columns: calc(124px) 17px;
        gap: 9px 6px;
        @media (max-width: ${mediaMaxWidh}) {
            display: flex;
            flex-direction: column;
            gap:2px;
        }
    `
        const StatsDesc = styled.span`
            font-size: 10px;
            line-height: normal;
            color: #000000;
            opacity: 0.4;
            z-index: 3;   
            position: relative;
            letter-spacing: 0em;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 8px;
            }
        `
        const StatsUsed = styled.span`
            ${StatsFont};
        `
        const StatsLim = styled.span`
            ${StatsFont};
            color: #8AC540;
        `

export default function UserStats(props){
    
    const { loading, used, limit} = props;

    const isMobile = useMediaQuery({ maxWidth: mediaMaxWidh});

    return (
        <>
            {
                loading?
                    <Loader
                        width= {isMobile?85:175}
                        min_widthDiv= {isMobile?85:175}
                    />
                :
                    <StatsLogged>
                        <StatsDiv>
                            <StatsDesc>Использовано компаний</StatsDesc>
                            <StatsUsed>{used}</StatsUsed>
                            <StatsDesc>Лимит по компаниям</StatsDesc>
                            <StatsLim>{limit}</StatsLim>
                        </StatsDiv>
                    </StatsLogged>
            }
        </>
    )
}