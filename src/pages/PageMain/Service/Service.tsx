import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import * as S from "./styled";

function Service(props: { logged: boolean }) {
    const { logged } = props;
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const refDiv = React.useRef<HTMLDivElement>(null);

    const [imgParams, setImgParams] = useState(["530px", "60px", "629px"]);

    function handleClick() {
        navigate("/search");
    }

    function handeResize() {
        if (refDiv.current) {
            let v_width: number = refDiv.current.offsetWidth;
            let lOffset: string = v_width < 1211 ? "522px" : "auto";
            let rOffset: string = v_width < 1211 ? "auto" : "60px";
            let imgWidth =
                v_width < 550 + 51 + 629 - 40
                    ? v_width - (550 + 51 - 79) + "px"
                    : "629px";
            if (isMobile) {
                lOffset = "0";
                rOffset = "0";
                imgWidth = "347.182";
            }
            setImgParams([lOffset, rOffset, imgWidth]);
        }
    }

    useEffect(() => {
        handeResize();
    }, [isMobile]);

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [imgParams]);

    return (
        <S.Container ref={refDiv}>
            <S.DivTItle>
                <S.Title>
                    сервис по поиску
                    <br />
                    публикаций {isMobile && <br />}о компании
                    <br />
                    по его ИНН
                </S.Title>
                <S.TitleDesc>
                    Комплексный анализ публикаций, получение данных
                    <br />в формате PDF на электронную почту.
                </S.TitleDesc>
                {logged && (
                    <Button onClick={handleClick} $margin_bottom={39}>
                        Запросить данные
                    </Button>
                )}
            </S.DivTItle>
            <div>
                <S.TitleImgDiv
                    $left={imgParams[0]}
                    $right={imgParams[1]}
                    $width={imgParams[2]}
                ></S.TitleImgDiv>
            </div>
        </S.Container>
    );
}

export default Service;
