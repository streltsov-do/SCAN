import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

import { FormSearch } from "./FormSearch/FormSearch";
import * as S from "./styled";

import ImgDocumentSvg from "./img/Document.svg";
import ImgFoldersSvg from "./img/Folders.svg";

//
function PageSearch(props: { logged: boolean }) {
    const { logged } = props;

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    useEffect(() => {
        !logged && navigate("/");
    });

    return (
        <>
            {logged && (
                <S.DivBackground>
                    <S.Container $mobile={isMobile}>
                        <S.DivMain>
                            <S.Title>
                                Найдите необходимые данные в пару кликов.
                            </S.Title>
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
                        <S.ImgImgDocumentSvg
                            src={ImgDocumentSvg}
                        ></S.ImgImgDocumentSvg>
                        <S.ImgSearch></S.ImgSearch>
                    </S.Container>
                </S.DivBackground>
            )}
        </>
    );
}

export { PageSearch };
