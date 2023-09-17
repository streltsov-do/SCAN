import React from "react";

import { Btn } from "./styled";

export default function Button(props) {
    const {
        name,
        width,
        height,
        background,
        color,
        m_top,
        m_right,
        m_bottom,
        m_left,
        position,
        top,
        right,
        bottom,
        left,
        align,
        justify,
        f_size,
        f_height,
        disabled,
        onClick,
        type,
    } = props;

    const bg = "#" + (background || "5970FF") + (disabled ? "88" : "FF");

    return (
        <Btn
            width={width}
            height={height}
            background={bg}
            color={color}
            m_top={m_top}
            m_right={m_right}
            m_bottom={m_bottom}
            m_left={m_left}
            position={position}
            top={top}
            right={right}
            bottom={bottom}
            left={left}
            align={align}
            justify={justify}
            f_size={f_size}
            f_height={f_height}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            {name}
        </Btn>
    );
}
