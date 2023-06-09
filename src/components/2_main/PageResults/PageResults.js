import React from "react";
import styled from "styled-components";

import DivFlex from "../../utils/DivFlex/DivFlex";

import Searching from './Searching.svg';

const DivMain=styled.div`
    position: relative;
    padding: 69px 0 0 60px;
`
const ImgSearching=styled.img`
    position: absolute;
    top: 20px;
    right: 103.44px;
    z-index: 1;
`
    const Title=styled.h1`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 0.04em;

        color: #000000;
    `
    const TitleDesc=styled.h3`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;
    `
    const Title2=styled.h2`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.02em;
        color: #000000;
    `
    const Title2Desc=styled.h4`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: #949494;
    `

export default function PageResults(props){

    return(
        <DivMain>
            <DivFlex
                direction="column"
                gap={36}
                m_bottom={127}
                zindex={2}
                position="relative"
                render={
                    <>
                        <Title>Ищем. Скоро<br/>будут результаты</Title>
                        <TitleDesc>Поиск может занять некоторое время,<br/>просим сохранять терпение.</TitleDesc>
                    </>
                }
            />
            <DivFlex
                direction="column"
                gap={17}
                m_bottom={27}
                render={
                    <>
                        <Title2>Общая сводка</Title2>
                        <Title2Desc>Найдено 4 221 вариантов</Title2Desc>
                        
                        <Title2>Список документов</Title2>
                    </>
                }
            />

            <ImgSearching src={Searching}></ImgSearching>
        </DivMain>
    )
}