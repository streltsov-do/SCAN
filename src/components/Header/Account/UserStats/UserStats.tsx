import React from "react";
import { useMediaQuery } from "react-responsive";

import Loader from "../../../Loader/Loader";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import * as S from "./styled";

export default function UserStats(props: {
    loading: boolean;
    used: number;
    limit: number;
}) {
    const { loading, used, limit } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <>
            {loading ? (
                <Loader
                    widthDiv={isMobile ? 85 : 175}
                    widthDivMin={isMobile ? 85 : 175}
                    widthLoader={24}
                />
            ) : (
                <S.StatsLogged $loading={false}>
                    <S.StatsDiv>
                        <S.StatsDesc>Использовано компаний</S.StatsDesc>
                        <S.StatsUsed>{used}</S.StatsUsed>
                        <S.StatsDesc>Лимит по компаниям</S.StatsDesc>
                        <S.StatsLim>{limit}</S.StatsLim>
                    </S.StatsDiv>
                </S.StatsLogged>
            )}
        </>
    );
}
