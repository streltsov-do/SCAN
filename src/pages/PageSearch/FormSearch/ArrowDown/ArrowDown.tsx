import React from "react";
import styled from "styled-components/macro";

import Rectangle from "./Rectangle.svg";

const Img = styled.img<{
    right?: number;
    $rotate: boolean;
}>`
    position: absolute;
    top: 15.56px;
    right: ${(props) =>
        props.right === undefined ? "15.56px" : props.right + "px"};
    border-style: none;
    transform: rotate(${(props) => (props.$rotate ? 180 : 0)}deg);
`;

function ArrowDown(props: { right?: number; $rotate: boolean }) {
    const { $rotate, right } = props;
    return <Img src={Rectangle} $rotate={$rotate} right={right}></Img>;
}

export { ArrowDown };
