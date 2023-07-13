import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

import DivFlex from "../../utils/DivFlex/DivFlex";
import FormSearch from "./FormSearch/FormSearch";
import { mediaMaxWidh } from "../../utils/consts";

import ImgDocumentSvg     from './img/Document.svg';
import ImgFoldersSvg      from './img/Folders.svg';
import ImgSearchSvg from './img/Search.svg';

// 
    const DivMain=styled.div`
        position: relative;
        z-index: 5;
    `
        const Title=styled.h1`
            font-family: 'Ferry';
            font-style: normal;
            font-weight: 900;
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 0.03em;
            width: 817px;
            height: 96px;
            margin-bottom: 25px;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 28px;
                line-height: normal;
                letter-spacing: 0.28px;
                width: 361px;
                height: auto;
                margin-left: 14px;
                margin-bottom: 19px;
            }
        `
        const TitleDesc=styled.h3`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.02em;
            width: 534px;
            height: 48px;
            margin-bottom: 47px;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 18px;
                line-height: normal;
                width: 297px;
                height: auto;
                margin-left: 14px;
                margin-bottom: 21px;
            }
        `
    const ImgImgFoldersSvg=styled.img`
        position: absolute;
        right: 104.39px;
        bottom: 637.61px;
        z-index: 4;
    `
    const ImgImgDocumentSvg=styled.img`
        position: absolute;
        top: ${132-69}px;
        right: 411px;
        z-index: 4;
        @media (max-width: ${mediaMaxWidh}) {
            width: 58.242px;
            height: 71.118px;
            top: 97px;
            left: 291px;
            right: auto;
        }
    `
    const ImgSearch=styled.div`
        width: 442.573px;
        height: 470.214px;
        position: absolute;
        top: ${351-69}px;
        right: -7.59px;
        background-image: url(${ImgSearchSvg});
        background-size: cover;
        @media (max-width: ${mediaMaxWidh}) {
            width: ${375-14-40.57}px;
            height: 403.279px;
            position: relative;
            top: 0;
            right: -40.57px;
            margin-bottom: 24.72px;
        }
    `

export default function PageSearch(props) {
    const { logged } = props;
    const [isLoading, setIsLoading] = useState(true);

    const navigate=useNavigate();

    const isMobile=useMediaQuery({maxWidth: mediaMaxWidh});

    useEffect(() => {
        if (!logged){
            setIsLoading(true);
            // console.log('1');
            navigate("/");
        } else {
            // console.log('2');
            setIsLoading(false);
        }
    });

    return(
            (!isLoading)?
                <DivFlex
                    m_top   ={isMobile?0:69}
                    m_right ={isMobile?0:0 }
                    m_bottom={isMobile?0:80}
                    m_left  ={isMobile?0:64}
                    width   ={isMobile?375:""}
                    position="relative"
                    direction={isMobile?"column":"row"}
                    render={
                        <>
                            <DivMain>
                                <Title>
                                    Найдите необходимые данные в пару кликов.
                                </Title>
                                <TitleDesc>
                                    Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск
                                </TitleDesc>
                                <FormSearch/>
                            </DivMain>
                            {isMobile?
                                <></>
                            :
                                <ImgImgFoldersSvg src={ImgFoldersSvg}></ImgImgFoldersSvg>
                            }
                            <ImgImgDocumentSvg src={ImgDocumentSvg}></ImgImgDocumentSvg>
                            <ImgSearch></ImgSearch>
                        </>
                    }
                />
            : <></>
    )
}