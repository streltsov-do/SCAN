import React from "react";
import { useMediaQuery } from "react-responsive";

import Carousel from "./Carousel/Carousel";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";
import * as S from "./styled.js";

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
