import React from "react";
import styled, {css} from 'styled-components/macro';

import imgLogoPng from './scan_transparent.png';

const FooterDiv = styled.div`
    width: auto;
    height: 137px;
    background: #029491;
    display: flex;
    justify-content: space-between;
    padding: 0 45px 0 60px;
`
    const LogoImg = styled.img`
        width: 141px;
        height: 141px;
        /* background-color: transparent; */
        fill: #000;
    `
        const Info = styled.div`
            width: 200px;
            display: flex;
            flex-direction: column;
            gap: 21px;
            padding: 25px 0;
        `
        const InfoText = styled.div`
            color: #FFFFFF;
            text-align: right;
            letter-spacing: 0;
        `

function Footer() {
    return (
        <FooterDiv>
            <LogoImg src={imgLogoPng} alt="СКАН"></LogoImg>
            <Info>
                <div>
                    <InfoText>г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru</InfoText>
                </div>
                <InfoText>Copyright. 2022</InfoText>
            </Info>
        </FooterDiv>
    )
}

export default Footer;