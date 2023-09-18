import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import FormSearch from "./FormSearch/FormSearch";
import * as S from "./styled.js";

import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";
import ImgDocumentSvg from "./img/Document.svg";
import ImgFoldersSvg from "./img/Folders.svg";

//

export default function PageSearch(props) {
    const { logged } = props;

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    useEffect(() => {
        !logged && navigate("/");
    });

    return (
        logged && (
            <S.Container mobile={isMobile ? 1 : 0}>
                <S.DivMain>
                    <S.Title>Найдите необходимые данные в пару кликов.</S.Title>
                    <S.TitleDesc>
                        Задайте параметры поиска.
                        <br />
                        Чем больше заполните, тем точнее поиск
                    </S.TitleDesc>
                    <FormSearch />
                </S.DivMain>
                {!!isMobile && (
                    <S.ImgImgFoldersSvg
                        src={ImgFoldersSvg}
                    ></S.ImgImgFoldersSvg>
                )}
                <S.ImgImgDocumentSvg src={ImgDocumentSvg}></S.ImgImgDocumentSvg>
                <S.ImgSearch></S.ImgSearch>
            </S.Container>
        )
    );
}