import React from "react";
import styled from "styled-components/macro";

import Carousel from "./Carousel/Carousel";

import Perfect from './perfect.svg';

const Container = styled.div`
    width: 1346px;
    height: ${349+575.52+70*2}px;
    display: flex;
    flex-direction: column;
    gap: 70px;
`

const Title = styled.h2`
    margin-right: 9px;
    font-family: 'Ferry';
    font-style: normal;
    font-weight: 900;
    font-size: 45px;
    line-height: 54px;
`

const PerfectImg=styled.img`
    width: 1307px;
    height: 575.52px;
`

function Advantages() {
    return (
        <Container>
            <Title>Почему именно мы</Title>
            <Carousel></Carousel>
            <div>
                <PerfectImg src={Perfect} alt="Perfect"></PerfectImg>
            </div>
        </Container>
    )
}

export default Advantages;