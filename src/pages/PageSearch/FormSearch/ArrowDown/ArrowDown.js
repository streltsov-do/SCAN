import React from "react";
import styled from "styled-components";

import Rectangle from "./Rectangle.svg";

const Img = styled.img`
    position: absolute;
    top: 15.56px;
    right: ${(props) =>
        props.right === undefined ? "15.56px" : props.right + "px"};
    border-style: none;
    transform: rotate(${(props) => (props.rotate === "true" ? 180 : 0)}deg);
`;

export default function ArrowDown(props) {
    const { rotate, right } = props;
    return <Img src={Rectangle} rotate={rotate} right={right}></Img>;
}
