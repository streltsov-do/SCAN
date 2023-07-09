import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components/macro";

import DivFlex from "../../utils/DivFlex/DivFlex";
import FormSearch from "./FormSearch/FormSearch";

import Character    from './img/Character.svg';
import Document     from './img/Document.svg';
import Folders      from './img/Folders.svg';
import Rocket       from './img/Rocket.svg';
import Searchbar    from './img/Searchbar.svg';
import Window       from './img/Window.svg';

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
        `
// 
    const ImgWindow=styled.img`
        position: absolute;
        right: 43px;
        bottom: 196.65px;
        z-index: 1;
    `
    const ImgRocket=styled.img`
        position: absolute;
        right: 0px;
        bottom: 235.55px;
        z-index: 2;
    `
    const ImgSearchbar=styled.img`
        position: absolute;
        right: 85.57px;
        bottom: 279.02px;
        z-index: 3;
    `
    const ImgCharacter=styled.img`
        position: absolute;
        right: 277.56px;
        bottom: 70.79px;
        z-index: 4;
    `
    const ImgFolders=styled.img`
        position: absolute;
        right: 104.39px;
        bottom: 637.61px;
        z-index: 4;
    `
    const ImgDocument=styled.img`
        position: absolute;
        right: 411px;
        bottom: 648.88px;
        z-index: 4;
    `

export default function PageSearch(props) {
    const { logged } = props;
    const [isLoading, setIsLoading] = useState(true);

    const navigate=useNavigate();

    useEffect(() => {

        if (!logged){
            setIsLoading(true);
            navigate("/");
        } else {
            setIsLoading(false);
        }
    });

    return(
            (!isLoading)?
                <DivFlex
                    m_top={69}
                    m_right={0}
                    m_bottom={80}
                    m_left={64}
                    position="relative"
                    render={
                        <>
                            <DivMain>
                                <Title>Найдите необходимые данные в пару кликов.</Title>
                                <TitleDesc>Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск</TitleDesc>
                                <FormSearch/>
                            </DivMain>
                            <ImgWindow src={Window}></ImgWindow>
                            <ImgSearchbar src={Searchbar}></ImgSearchbar>
                            <ImgRocket src={Rocket}></ImgRocket>
                            <ImgCharacter src={Character}></ImgCharacter>
                            <ImgFolders src={Folders}></ImgFolders>
                            <ImgDocument src={Document}></ImgDocument>
                        </>
                    }
                />
            : <></>
    )
}