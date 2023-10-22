import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

import Loader from "../../../components/Loader/Loader";

import * as S from "./styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import { CardsData } from "../../../reducers/searchSlice";

import {
    CARD_WIDTH,
    CARD_WIDTH_MOBILE,
    CARD_HEIGHT,
    CARD_HEIGHT_MOBILE,
    LOADER_DIV_WIDTH_MOBILE,
    LOADER_DIV_WIDTH_MIN_MOBILE,
    LOADER_DIV_WIDTH,
    DESC_WIDTH,
    BTN_WIDTH,
} from "./consts";
import CardResult from "./CardResult/CardResult";

function SearchCarousel(props: {
    parent_p_left: number;
    loading: boolean;
    cards: CardsData[];
    $margin_bottom: number;
}) {
    const { parent_p_left, loading, cards, $margin_bottom } = props;

    const [displayNum, setDisplayNum] = useState(1);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const handeResize = useCallback(() => {
        const widthCardDivMax =
            window.innerWidth - DESC_WIDTH - parent_p_left - 2 * BTN_WIDTH - 30;
        let newDisplayNum = Math.floor(widthCardDivMax / CARD_WIDTH);
        newDisplayNum = newDisplayNum > 8 ? 8 : newDisplayNum;

        if (newDisplayNum !== displayNum && newDisplayNum > 0) {
            setDisplayNum(newDisplayNum);
        }
    }, [displayNum, parent_p_left]);

    useEffect(() => {
        handeResize();
    });

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [handeResize]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        row: 1,
        vertical: false,
        slidesToShow: isMobile ? 1 : displayNum,
        slidesToScroll: isMobile ? 1 : displayNum,
        height: isMobile ? CARD_HEIGHT_MOBILE : CARD_HEIGHT,
    };

    const containerWidth = displayNum * CARD_WIDTH;

    return (
        <S.Container
            width={containerWidth + DESC_WIDTH}
            $margin_bottom={$margin_bottom}
        >
            <S.DivMain>
                <S.Desc>
                    <S.DescTitle $margin_right={49 + 5}>Период</S.DescTitle>
                    <S.DescTitle $margin_right={20 + 5}>Всего </S.DescTitle>
                    <S.DescTitle $margin_right={0}>Риски </S.DescTitle>
                </S.Desc>
                {loading ? (
                    <S.DivResults width={containerWidth} $mobile={isMobile}>
                        {/* TODO: Плавное уменьшение ширины лоадера */}
                        <Loader
                            widthDiv={
                                isMobile
                                    ? LOADER_DIV_WIDTH_MOBILE
                                    : containerWidth < LOADER_DIV_WIDTH
                                    ? LOADER_DIV_WIDTH
                                    : displayNum * CARD_WIDTH
                            }
                            widthDivMin={
                                isMobile
                                    ? LOADER_DIV_WIDTH_MIN_MOBILE
                                    : undefined
                            }
                            widthLoader={LOADER_DIV_WIDTH_MOBILE}
                        />
                        {!isMobile && (
                            <S.LoaderDesc width={containerWidth}>
                                Загружаем данные
                            </S.LoaderDesc>
                        )}
                    </S.DivResults>
                ) : (
                    <S.Div width={containerWidth}>
                        <Slider {...settings}>
                            {cards.map((item, index) => (
                                <CardResult
                                    key={index}
                                    width={
                                        isMobile
                                            ? CARD_WIDTH_MOBILE
                                            : CARD_WIDTH
                                    }
                                    period={item.date}
                                    all={item.docs}
                                    risc={item.risk}
                                    last={index + 1 === displayNum}
                                />
                            ))}
                        </Slider>
                    </S.Div>
                )}
            </S.DivMain>
        </S.Container>
    );
}

export { SearchCarousel };
