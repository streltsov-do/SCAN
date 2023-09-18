import React from "react";
import { useMediaQuery } from "react-responsive";

import Loader from "../../../Loader/Loader.js";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import * as S from "./styled.js";

export default function UserStats(props) {
    const { loading, used, limit } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <>
            {loading ? (
                <Loader
                    width={isMobile ? 85 : 175}
                    min_widthDiv={isMobile ? 85 : 175}
                />
            ) : (
                <S.StatsLogged>
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
