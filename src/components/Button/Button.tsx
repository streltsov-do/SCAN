// import React from "react";
import { ButtonProps } from "./types";
import { Btn } from "./styled";

export default function Button(props: ButtonProps) {
    const {
        children,
        width,
        height,
        $background,
        color,
        $margin_top,
        $margin_right,
        $margin_bottom,
        $margin_left,
        $position,
        $offset_top,
        $offset_right,
        $offset_bottom,
        $offset_left,
        $align,
        justify,
        $font_size,
        $line_height,
        disabled,
        onClick,
        type,
        form
    } = props;

    const bg = "#" + ($background || "5970FF") + (disabled ? "88" : "FF");

    return (
        <Btn
            width={width}
            height={height}
            $background={bg}
            color={color}
            $margin_top={$margin_top}
            $margin_right={$margin_right}
            $margin_bottom={$margin_bottom}
            $margin_left={$margin_left}
            $position={$position}
            $offset_top={$offset_top}
            $offset_right={$offset_right}
            $offset_bottom={$offset_bottom}
            $offset_left={$offset_left}
            $align={$align}
            justify={justify}
            $font_size={$font_size}
            $line_height={$line_height}
            disabled={disabled}
            onClick={onClick}
            type={type}
            form={form}
        >{children}</Btn>
    );
}
