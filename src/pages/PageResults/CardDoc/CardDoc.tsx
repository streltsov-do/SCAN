import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import * as S from "./styled";

export default function CardDoc(props: {
    issueDate: string;
    source: string;
    title: string;
    img: string | null;
    desc: string;
    url: string;
    wordCount: number;
    isTechNews: boolean;
    isAnnouncement: boolean;
    isDigest: boolean;
}) {
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

    return (
        <S.Container>
            <S.DivDates $mobile={isMobile}>
                <S.Date>{issueDate}</S.Date>
                <S.Source>{source}</S.Source>
            </S.DivDates>
            <S.Title>{title}</S.Title>
            <S.DivTypes>
                {isTechNews && (
                    <S.Type $background="#FFB64F">Технические новости</S.Type>
                )}
                {isAnnouncement && <S.Type $background="#11B64F">Анонс</S.Type>}
                {isDigest && <S.Type $background="#FF004F">Дайджест</S.Type>}
            </S.DivTypes>
            {!(img === "") && (
                <S.Img
                    $background={typeof img === "string" ? img : ""}
                    // alt="Amasing"
                ></S.Img>
            )}
            <S.Desc>
                {desc.slice(
                    0,
                    (isMobile ? 500 : 700) *
                        (img === "" ? (isMobile ? 2 : 1.5) : 1),
                )}
            </S.Desc>
            <S.DivBtn $mobile={isMobile}>
                <Button
                    width={isMobile ? 195 : 223}
                    height={isMobile ? 40.696 : 46.54}
                    $background="7CE3E1"
                    color="000000"
                    $font_size={16}
                    $line_height={19}
                    onClick={(e) => window.open(url, "_blank")}
                >
                    Читать в источнике
                </Button>
                <S.Words>{wordCount} слова</S.Words>
            </S.DivBtn>
        </S.Container>
    );
}
