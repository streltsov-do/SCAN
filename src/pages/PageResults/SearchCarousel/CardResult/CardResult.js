import React from "react";
import { useMediaQuery } from "react-responsive";

import * as S from "./styled.js";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

export default function CardResult(props) {
    const { period, all, risc, last, width } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <S.Container>
            <S.DivMain mobile={isMobile ? 1 : 0} width={width}>
                <S.Span>{period}</S.Span>
                <S.Span>{all}</S.Span>
                <S.Span>{risc}</S.Span>
            </S.DivMain>
            {!(last || isMobile) && <S.DivFax></S.DivFax>}
        </S.Container>
    );
}
