import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { ArrowDown } from "../ArrowDown/ArrowDown";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import * as S from "./styled";

const items = ["Позитивная", "Негативная", "Любая"];

export default function DropDown(props: {
    $align: string;
    tone: number;
    setTone: (idx: number) => void;
}) {
    const { $align, tone, setTone } = props;

    const [showDrops, setShowDrops] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    function handleDrops(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setShowDrops(!showDrops);
    }

    function handleChoose(idx: number) {
        setShowDrops(false);
        setTone(idx);
    }

    return (
        <S.Container $align={$align}>
            <S.DivArrow $mobile={isMobile}>
                <S.Btn onClick={handleDrops}>
                    {items[tone]}
                    <ArrowDown $rotate={showDrops} />
                </S.Btn>
            </S.DivArrow>
            {showDrops && (
                <S.DivDrop $mobile={isMobile} items={items.length}>
                    {items.map((item, index) => (
                        <S.DivDropItem
                            key={index}
                            $mobile={isMobile}
                            index={index}
                        >
                            <S.Btn
                                onClick={(
                                    e: React.MouseEvent<HTMLButtonElement>,
                                ) => handleChoose(index)}
                            >
                                {item}
                            </S.Btn>
                        </S.DivDropItem>
                    ))}
                    ;
                </S.DivDrop>
            )}
        </S.Container>
    );
}
