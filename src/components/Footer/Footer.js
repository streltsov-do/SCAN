import React from "react";

import imgLogoPng from "./scan_transparent.png";
import * as S from "./styled.js";

function Footer() {
    return (
        <S.FooterDiv>
            <S.LogoImg src={imgLogoPng} alt="СКАН" />
            <S.Info>
                <div>
                    <S.InfoText>
                        г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru
                    </S.InfoText>
                </div>
                <S.InfoText>Copyright. 2022</S.InfoText>
            </S.Info>
        </S.FooterDiv>
    );
}

export { Footer };
