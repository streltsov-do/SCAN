import React from "react";
import { useMediaQuery } from "react-responsive";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

import Carousel from "./Carousel/Carousel";
import * as S from "./styled";

function Advantages() {
    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <S.Container>
            <S.Title>Почему {isMobile ? <br /> : ""}именно мы</S.Title>
            <Carousel />
            <div>
                <S.PerfectImg1 />
            </div>
        </S.Container>
    );
}

export default Advantages;
