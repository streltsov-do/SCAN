import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    width?: number;
    height?: number;
    $background?: string;
    color?: string;
    $margin_top?: number;
    $margin_right?: number;
    $margin_bottom?: number;
    $margin_left?: number;
    $position?: string;
    $offset_top?: number;
    $offset_right?: number;
    $offset_bottom?: number;
    $offset_left?: number;
    $align?: string;
    justify?: string;
    $font_size?: number;
    $line_height?: number;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    form?: string,
    type?: "button" | "submit" | "reset";
}

export { ButtonProps };
