import React from "react"
import styled from "styled-components"

import Rectangle from './Rectangle.svg';

const Img=styled.img`
    position: absolute;
    /* width: 13.74px;
    height: 13.74px; */
    /* background: #D9D9D9; */
    /* transform: rotate(-45deg); */
    /* bottom: 15.56px; */
    top: 15.56px;
    right: 15.56px;
    border-style: none;
    transform: rotate(${props => (props.rotate == "true") ? 180 : 0}deg);
`

export default function ArrowDown(props) {
    const { rotate } = props;
    return (
        <Img 
            src={Rectangle}
            rotate={rotate}
        ></Img>
    )
}