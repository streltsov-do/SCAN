import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../../PageMain/custom/Button/Button";
import * as S from "./styled.js";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

export default function CardDoc(props) {
    const {
        issueDate,
        source,
        title,
        img,
        desc,
        url,
        wordCount,
        isTechNews,
        isAnnouncement,
        isDigest,
    } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    // console.log("isMob",isMobile);
    return (
        <S.Container>
            <S.DivDates isMobile={isMobile}>
                <S.Date>{issueDate}</S.Date>
                <S.Source>{source}</S.Source>
            </S.DivDates>
            <S.Title>{title}</S.Title>
            <S.DivTypes>
                {isTechNews && (
                    <S.Type bg="#FFB64F">Технические новости</S.Type>
                )}
                {isAnnouncement && <S.Type bg="#11B64F">Анонс</S.Type>}
                {isDigest && <S.Type bg="#FF004F">Дайджест</S.Type>}
            </S.DivTypes>
            {!(img === "") && <S.Img background={img} alt="Amasing"></S.Img>}
            <S.Desc>
                {desc.slice(
                    0,
                    (isMobile ? 500 : 700) *
                        (img === "" ? (isMobile ? 2 : 1.5) : 1),
                )}
            </S.Desc>
            <S.DivBtn isMobile={isMobile}>
                <Button
                    width={isMobile ? 195 : 223}
                    height={isMobile ? 40.696 : 46.54}
                    background="7CE3E1"
                    color="000000"
                    name="Читать в источнике"
                    f_size={16}
                    f_height={19}
                    onClick={(e) => window.open(url, "_blank")}
                />
                <S.Words>{wordCount} слова</S.Words>
            </S.DivBtn>
        </S.Container>
    );
}
