import React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import CardResult from "./CardResult/CardResult";
import Loader from "../../../utils/Loading/Loader";
import * as S from "./styled.js";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderResults.css";

const arr = [
    {
        period: "10.09.2021",
        all: 5,
        risc: 0,
    },
    {
        period: "13.09.2021",
        all: 2,
        risc: 0,
    },
    {
        period: "17.09.2021",
        all: 6,
        risc: 0,
    },
    {
        period: "20.09.2021",
        all: 8,
        risc: 2,
    },
    {
        period: "12.10.2021",
        all: 1,
        risc: 0,
    },
    {
        period: "15.10.2021",
        all: 10,
        risc: 2,
    },
    {
        period: "16.10.2021",
        all: 4,
        risc: 0,
    },
    {
        period: "17.10.2021",
        all: 3,
        risc: 0,
    },
];

export default function SearchCarousel(props) {
    const { parent_p_left, loading, state, m_bottom } = props;
    const cards = state.cards;

    const [displayNum, setDisplayNum] = useState(1);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    function handeResize() {
        const widthDobbyMax =
            window.innerWidth -
            S.DESC_WIDTH -
            parent_p_left -
            2 * S.BTN_WIDTH -
            30;
        let newDisplayNum = Math.floor(widthDobbyMax / S.CARD_WIDTH);
        newDisplayNum = newDisplayNum > 8 ? 8 : newDisplayNum;

        if (newDisplayNum !== displayNum && newDisplayNum > 0) {
            setDisplayNum(newDisplayNum);
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [displayNum]);

    useEffect(() => {
        handeResize();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        row: 1,
        vertical: false,
        slidesToShow: isMobile ? 1 : displayNum,
        slidesToScroll: isMobile ? 1 : displayNum,
        height: isMobile ? 154 - 75 : S.CARD_HEIGHT,
    };

    const cWidth = displayNum * S.CARD_WIDTH;

    return (
        <S.Container width={cWidth + S.DESC_WIDTH} m_bottom={m_bottom}>
            <S.DivMain>
                <S.Desc>
                    <S.DescTitle m_right={49 + 5}>Период</S.DescTitle>
                    <S.DescTitle m_right={20 + 5}>Всего </S.DescTitle>
                    <S.DescTitle m_right={0}>Риски </S.DescTitle>
                </S.Desc>
                {loading ? (
                    <S.DivResults width={cWidth} isMobile={isMobile}>
                        {/* TODO: Плавное уменьшение ширины лоадера */}
                        <Loader
                            widthDiv={
                                isMobile
                                    ? 50
                                    : cWidth < 262
                                    ? 262
                                    : displayNum * S.CARD_WIDTH
                            }
                            min_widthDiv={isMobile && 75}
                            widthLoader={50}
                        />
                        {!isMobile && (
                            <S.LoaderDesc width={cWidth + "px"}>
                                Загружаем данные
                            </S.LoaderDesc>
                        )}
                    </S.DivResults>
                ) : (
                    <S.Div width={cWidth}>
                        <Slider {...settings} className="sliderResults">
                            {cards.map((item, index) => (
                                <CardResult
                                    key={index}
                                    width={isMobile ? 296 : S.CARD_WIDTH}
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
