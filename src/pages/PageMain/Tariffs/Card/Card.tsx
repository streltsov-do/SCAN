import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../../../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import * as S from "./styled";
import { CardProps } from "./types";

import CheckMark from "./CheckMark.svg";

function Card(props: CardProps) {
    const { color, price, title, titleDesc, icon, active, options } = props;

    const divColor = active ? color : "FFFFFF";
    const btnDesc = active ? "Перейти в личный кабинет" : "Подробнее";
    const btnBg = active ? "D2D2D2" : "5970FF";
    const btnColor = active ? "000000" : "FFFFFF";

    const titleColor = color === "000000" ? "white" : "black";

    const p_installment = price.installment;
    const installment =
        p_installment === 0
            ? ""
            : `или ${p_installment} ₽/мес. при рассрочке на 24 мес.`;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <S.Div color={divColor}>
            <S.TitleDiv color={color}>
                <div>
                    <S.Title color={titleColor}>{title}</S.Title>
                    <S.TitleDesc color={titleColor}>{titleDesc}</S.TitleDesc>
                </div>
                <S.IconImg
                    src={icon.img}
                    width={icon.width}
                    height={icon.height}
                    $top={icon.top}
                    $right={icon.right}
                ></S.IconImg>
            </S.TitleDiv>
            <S.MainDiv>
                {active ? <S.Current>Текущий тариф</S.Current> : <></>}
                <S.PriceDiv>
                    <S.PriceSale>{price.sale} ₽</S.PriceSale>
                    <S.Price>{price.src} ₽</S.Price>
                </S.PriceDiv>
                <S.PriceInstallment>{installment}</S.PriceInstallment>
                <S.TariffDesc>В тариф входит:</S.TariffDesc>
                <S.TariffOptions>
                    {options.map((item, index) => (
                        <S.OptionDiv key={index}>
                            <S.Check src={CheckMark}></S.Check>
                            <S.OptionDecs>{item}</S.OptionDecs>
                        </S.OptionDiv>
                    ))}
                </S.TariffOptions>
                <Button
                    width={isMobile ? 286.566 : 355}
                    height={59}
                    $background={btnBg}
                    color={btnColor}
                    $font_size={20}
                    $line_height={24}
                    $position="absolute"
                    $offset_bottom={33}
                    $offset_right={24}
                >
                    {btnDesc}
                </Button>
            </S.MainDiv>
        </S.Div>
    );
}

export default Card;
