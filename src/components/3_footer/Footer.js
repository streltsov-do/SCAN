import React from "react";
import styled from 'styled-components/macro';

import imgLogoPng from './scan_transparent.png';
import { mediaMaxWidh } from "../utils/consts";

const FooterDiv = styled.div`
    width: auto;
    height: 137px;
    background: #029491;
    display: flex;
    justify-content: space-between;
    padding: 0 45px 0 60px;
    position: relative;
    @media (max-width: ${mediaMaxWidh}) {
        padding: 25px 19px 0 18px;
    }
`
    const LogoImg = styled.img`
        width: 141px;
        height: 141px;
        fill: #000;
        @media (max-width: ${mediaMaxWidh}) {
            width: 111px;
            height: 111px;
            position: absolute;
            left: 18px;
            top: -12px;
        }
    `
        const Info = styled.div`
            width: 200px;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            gap: 21px;
            padding: 25px 0;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 14px;
                font-weight: 400;
                line-height: normal;
                letter-spacing: 0.14px;
                position: absolute;
                right:19px;
                top:25px;
                padding: 0;
            }
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
                    <InfoText>
                        г. Москва, Цветной б-р, 40 +7 495 771 21 11 info@skan.ru
                    </InfoText>
                </div>
                <InfoText>Copyright. 2022</InfoText>
            </Info>
        </FooterDiv>
    )
}

export default Footer;