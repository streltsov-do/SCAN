import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import PicTitle from './pic1.png';
import Button from "../custom/Button/Button";

const Container=styled.div`
    width: 1320px;
    height: 620px;
    display: flex;
    position: relative;
    padding-left: 9px;
`
    const ContainerTitle=styled.div`
        /* width: 629px; */
        width: 743px;
        height: 593px;
        z-index: 2;
        padding-top: 18px;
        display: flex;
        flex-direction: column;
        position: relative;
    `
        const Title=styled.h1`
            width: 743px;
            height: 288px;
            font-family: 'Ferry';
            font-style: normal;
            font-weight: 900;
            font-size: 60px;
            line-height: 72px;
            letter-spacing: 0.01em;
            text-align: left;
            margin-bottom: 20px;
        `
        const TitleDesc=styled.h3`
            width: 550px;
            height: 48px;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            text-align: left;
            margin-bottom: 70px;
        `
    const TitleImg=styled.img`
        width: 629px;
        height: 593px;
        left: ${0-(629-577)}px;
        z-index: 1;
        position: relative;
    `


function Service(req) {
    return (
        <Container>
            <ContainerTitle>
                <Title>сервис по поиску<br/>публикаций о компании<br/>по его ИНН</Title>
                <TitleDesc>Комплексный анализ публикаций, получение данных<br/>в формате PDF на электронную почту.</TitleDesc>
                <Link to="/search">
                    <Button name={"Запросить данные"}></Button>
                </Link>
            </ContainerTitle>
            <TitleImg src={PicTitle}>
            </TitleImg>
        </Container>
    )
}

export default Service;