import React from "react"
import styled from "styled-components"

import ImgArrow from './ArrowRight.svg';

const Btn=styled.button`
    width: 39px;
    height: 39px;
    padding: 0;
    border: none;
    background-color: transparent;
    transform: rotate(${props => props.rotate || 0}deg);
`

export default function ButtonArrow(props) {
    const {rotate, onClick} = props;

    return(
        <Btn
            rotate={rotate}
            onClick={onClick}
        >
            <img src={ImgArrow}/>
        </Btn>
    )
}