import React from "react";

import * as S from "./styled.js";

export default function Asterisk(props) {
    const { top, left, good } = props;

    return (
        <S.Container>
            <S.DivMain>
                <S.Input1 top={top} left={left} $good={good}>
                    *
                </S.Input1>
            </S.DivMain>
        </S.Container>
    );
}
