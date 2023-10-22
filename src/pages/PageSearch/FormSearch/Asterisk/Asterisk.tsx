import React from "react";

import * as S from "./styled";

export default function Asterisk(props: {
    $top?: number;
    $left?: number;
    good: boolean;
}) {
    const { $top, $left, good } = props;

    return (
        <S.Container>
            <S.DivMain>
                <S.Input1 $top={$top} $left={$left} $good={good}>
                    *
                </S.Input1>
            </S.DivMain>
        </S.Container>
    );
}
