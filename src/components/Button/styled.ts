import React from "react";
import styled from "styled-components/macro";

import { ButtonProps } from "./types";

const Btn = styled.button<ButtonProps>`
    width: ${(props) => props.width || 335}px;
    height: ${(props) => props.height || 59}px;
    border-radius: 5px;
    border-style: none;
    background: ${(props) => props.$background};
    color: #${(props) => props.color || "FFFFFF"};
    margin-top: ${(props) =>
        props.$margin_top === undefined ? 0 : props.$margin_top + "px"};
    margin-right: ${(props) =>
        props.$margin_right === undefined ? 0 : props.$margin_right + "px"};
    margin-bottom: ${(props) =>
        props.$margin_bottom === undefined ? 0 : props.$margin_bottom + "px"};
    margin-left: ${(props) =>
        props.$margin_left === undefined ? 0 : props.$margin_left + "px"};
    position: ${(props) => props.$position};
    top: ${(props) =>
        props.$offset_top === undefined ? "auto" : props.$offset_top + "px"};
    right: ${(props) =>
        props.$offset_right === undefined
            ? "auto"
            : props.$offset_right + "px"};
    bottom: ${(props) =>
        props.$offset_bottom === undefined
            ? "auto"
            : props.$offset_bottom + "px"};
    left: ${(props) =>
        props.$offset_left === undefined ? "auto" : props.$offset_left + "px"};
    align-self: ${(props) => props.$align};
    justify-self: ${(props) => props.justify};
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => props.$font_size || 22}px;
    line-height: ${(props) => props.$line_height || 27}px;
    letter-spacing: 0.02em;
    &:hover {
        opacity: ${(props) => (props.disabled ? 100 : 80)}%;
    }
`;

export { Btn };
