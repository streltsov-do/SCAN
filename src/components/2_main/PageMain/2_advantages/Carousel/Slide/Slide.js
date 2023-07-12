import React from "react";
import styled from "styled-components/macro";

import { mediaMaxWidh } from "../../../../../utils/consts";

const widthSlide = 400;
const heightSlide = 225;
const shadow= 30;

const mediaWidthSlide = 298;
const mediaHeightSlide = 188;

const Container2 = styled.div`
    height: ${heightSlide+shadow}px;
    width: ${widthSlide+shadow}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    position: relative;
    @media (max-width: ${mediaMaxWidh}) {
        width: ${mediaWidthSlide + shadow}px;
        height: ${mediaHeightSlide + shadow}px;
    }
`
const Container = styled.div`
    width: ${widthSlide}px;
    height: ${heightSlide}px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    padding: 22px 0 0 19px;
    @media (max-width: ${mediaMaxWidh}) {
        width: ${mediaWidthSlide}px;
        height: ${mediaHeightSlide}px;
        padding: 22px 0 0 16.9px;
    }
`
    const H3styled=styled.h3`
        font-size: 18px;
        line-height: 22px;
    `
    const IconImg=styled.img`
        width: 65px;
        height: 79px;
        z-index: 2;
        @media (max-width: ${mediaMaxWidh}) {
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