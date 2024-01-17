import React from "react";
import { useMediaQuery } from "react-responsive";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import * as S from "./styled";

export default function CardResult(props: {
    period: string;
    all: number;
    risc: number;
    last: boolean;
    width: number;
}) {
    const { period, all, risc, last, width } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <S.Container>
            <S.DivMain $mobile={isMobile} width={width}>
                <S.Span>{period}</S.Span>
                <S.Span>{all}</S.Span>
                <S.Span>{risc}</S.Span>
            </S.DivMain>
            {!(last || isMobile) && <S.DivFax></S.DivFax>}
        </S.Container>
    );
}
