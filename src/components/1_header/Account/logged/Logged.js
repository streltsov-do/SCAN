import React from "react";
import styled, {css, keyframes} from "styled-components/macro";
import Loader from "../../../utils/Loading/Loader";

const StatsFont = css`
    font-size: 14px;
    line-height: 17px;
`

const StatsLogged = styled.div`
    width: 175px;
    height: 63px;
    display: ${props => props.loading?'none':'flex'};
    padding: 14px 8px 15px 8px;
`
    const StatsCol1 = styled.div`
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: flex-end;
        gap: 7px;  
        margin-right: 7px ;
    `
        const StatsDesc = styled.span`
            font-size: 10px;
            line-height: 12px;
            color: #000000;
            opacity: 0.4;
            z-index: 3;   
            position: relative;
            letter-spacing: 0em;
            /* margin-right: 6px; */
        `
    const StatsCol2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-beуtween;
        align-items: flex-start;
        /* gap: 7px;         */
    `
        const StatsUsed = styled.span`
            ${StatsFont};
            font-weight: 700;
        `
        const StatsLim = styled.span`
            ${StatsFont};
            font-weight: 700;
            color: #8AC540;
        `

function Logged(props){

    return (
        <>
            {
                props.loading?
                    <Loader/>
                :
                    <StatsLogged>
                        <StatsCol1>
                            <StatsDesc>Использовано компаний</StatsDesc>
                            <StatsDesc>Лимит по компаниям</StatsDesc>
                        </StatsCol1>
                        <StatsCol2>
                            <StatsUsed>34</StatsUsed>
                            <StatsLim>100</StatsLim>
                        </StatsCol2>
                    </StatsLogged>
            }
        </>
    )
}

export default Logged;