import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import ArrowDown from "../ArrowDown/ArrowDown";
import * as S from "./styled";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

const items = ["Позитивная", "Негативная", "Любая"];

export default function DropDown(props) {
    const { tone, setTone } = props;

    const [showDrops, setShowDrops] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    function handleDrops(e) {
        e.preventDefault();
        setShowDrops(!showDrops);
    }

    function handleChoose(idx) {
        setShowDrops(false);
        setTone(idx);
    }

    return (
        <S.Container>
            <S.DivArrow mobile={isMobile ? 1 : 0}>
                <S.Btn onClick={handleDrops}>
                    {items[tone]}
                    <ArrowDown rotate={showDrops.toString()} />
                </S.Btn>
            </S.DivArrow>
            {showDrops && (
                <S.DivDrop mobile={isMobile ? 1 : 0} items={items.length}>
                    {items.map((item, index) => (
                        <S.DivDropItem
                            key={index}
                            mobile={isMobile ? 1 : 0}
                            index={index}
                        >
                            <S.Btn onClick={(e) => handleChoose(index)}>
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
