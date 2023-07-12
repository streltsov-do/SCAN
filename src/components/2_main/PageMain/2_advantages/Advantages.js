import React from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

import Carousel from "./Carousel/Carousel";
import { mediaMaxWidh } from "../../../utils/consts";

import Perfect from './perfect.svg';

const Container = styled.div`
    width: 1346px;
    height: ${349+575.52+70*2}px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media (max-width: ${mediaMaxWidh}) {
        width: auto;
        display: block;
        margin-bottom: 80.48px;
        height: auto;
    }
`

const Title = styled.h1`
    margin-right: 9px;
    font-family: 'Ferry';
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 54px;
    @media (max-width: ${mediaMaxWidh}) {
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
        margin-bottom: 32px;
    }
`

const PerfectImg=styled.img`
    width: 1307px;
    height: 575.52px;
    @media (max-width: ${mediaMaxWidh}) {
        width: 891.411px;
        width: auto;
        height: 392.522px;
    }
`
const PerfectImg1=styled.div`
    width: 1307px;
    height: 575.52px;
    background-image: url(${Perfect});
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: ${mediaMaxWidh}) {
        /* width: 891.411px; */
        /* width: 80vw; */
        height: 392.522px;
    }
`

function Advantages() {
    
    const isMobile = useMediaQuery({ maxWidth: mediaMaxWidh});

    return (
        <Container>
            <Title>Почему {isMobile?<br/>:""}именно мы</Title>
            <Carousel/>
            <div>
                {/* <PerfectImg 
                    src={Perfect} 
                    alt="Perfect"
                ></PerfectImg> */}
                <PerfectImg1 
                ></PerfectImg1>
            </div>
        </Container>
    )
}

export default Advantages;