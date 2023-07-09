import React from "react";
import styled from "styled-components/macro";

const Container2 = styled.div`
    height: 250px;
    width: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Container = styled.div`
    width: 400px;
    height: 225px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.20);
    border-radius: 10px;
    padding: 22px 0 0 19px;
    position: relative;
`
    const IconDiv = styled.div`
        width: 65px;
        height: 79px;
        background: #029491;
        z-index: 1;
        margin-bottom: 12px;
    `
    const H3styled=styled.h3`
        font-size: 18px;
        line-height: 22px;
    `
    const IconImg=styled.img`
        width: 65px;
        height: 79px;
        z-index: 2;
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