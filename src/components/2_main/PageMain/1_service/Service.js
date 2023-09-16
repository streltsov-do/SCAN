import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../custom/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";
import * as S from "./styled.js";

function Service(props) {
    const { logged } = props;
    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const refDiv = useRef(null);

    const [imgParams, setImgParams] = useState(["530px", "60px", "629px"]);

    function handleClick() {
        navigate("/search");
    }

    function handeResize() {
        let v_width = refDiv.current.offsetWidth;
        let lOffset = v_width < 1211 ? "522px" : "auto";
        let rOffset = v_width < 1211 ? "auto" : "60px";
        let imgWidth =
            v_width < 550 + 51 + 629 - 40
                ? v_width - (550 + 51 - 79) + "px"
                : "629px";
        if (isMobile) {
            lOffset = 0;
            rOffset = 0;
            imgWidth = 347.182;
        }
        setImgParams([lOffset, rOffset, imgWidth]);
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
                    <Button
                        name={"Запросить данные"}
                        onClick={handleClick}
                        m_bottom={39}
                    />
                )}
            </S.DivTItle>
            <div>
                <S.TitleImgDiv
                    left={imgParams[0]}
                    right={imgParams[1]}
                    width={imgParams[2]}
                ></S.TitleImgDiv>
            </div>
        </S.Container>
    );
}

export default Service;
