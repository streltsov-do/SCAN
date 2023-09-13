import React from "react";
import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../../utils/consts";

const SLIDE_WIDTH = 400;
const SLIDE_HEIGHT = 225;
const SLIDE_SHADOW= 30;

const MOBILE_SLIDE_WIDTH = 298;
const MOBILE_SLIDE_HEIGHT = 188;

const Container2 = styled.div`
    height: ${SLIDE_HEIGHT+SLIDE_SHADOW}px;
    width: ${SLIDE_WIDTH+SLIDE_SHADOW}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: ${MOBILE_SLIDE_WIDTH + SLIDE_SHADOW}px;
        height: ${MOBILE_SLIDE_HEIGHT + SLIDE_SHADOW}px;
    }
`
const Container = styled.div`
    width: ${SLIDE_WIDTH}px;
    height: ${SLIDE_HEIGHT}px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    padding: 22px 0 0 19px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: ${MOBILE_SLIDE_WIDTH}px;
        height: ${MOBILE_SLIDE_HEIGHT}px;
        padding: 22px 0 0 16.9px;
    }
`
    const H3styled=styled.h3`
        font-size: 18px;
        line-height: 22px;
        font-weight: 400;
        @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
            font-size: 14px;
            line-height: normal;
            letter-spacing: 0.18px;
        }
    `
    const IconImg=styled.img`
        width: 65px;
        height: 79px;
        z-index: 2;
        @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
            width: 58px;
            margin-bottom: 12px;
        }
    `


function Slide(props) {
    
    return (
        <Container2>
            <Container>
                <IconImg src={props.icon} alt={props.alt}></IconImg>
                <H3styled>{props.desc}</H3styled>
            </Container>
        </Container2>
    );
}

export default Slide;