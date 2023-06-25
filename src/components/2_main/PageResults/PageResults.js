import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import DivFlex from "../../utils/DivFlex/DivFlex";
import SeacrchCarousel from "./SearchCarousel/SearchCarousel";
import CardDoc from "./CardDoc/CardDoc";

import Searching from './Searching.svg';
import Button from "../PageMain/custom/Button/Button";

const p_left=69;

const DivMain=styled.div`
    position: relative;
    padding: ${p_left}px 0 0 60px;
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
    const CardGrid=styled.div`
        display: grid;
        grid-template-columns: 641px 641px;
        gap: 20px;
    `

const arr=[
    {
        date    : "13.09.2021"           ,      
        source  : "Комсомольская правда KP.RU"  ,
        title   : "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        type    : "Технические новости",
        img     : 0,
        desc    : `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.${<br></br>}Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
        link    : 0,
        words   : 1235
    }
]

function PageResults(props){

    const { state, loading_his, loading_obj, publications } = props;

    const loading = loading_his && loading_obj;

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
            <SeacrchCarousel 
                loading={loading} 
                parent_p_left={p_left}
                state={state}
            />
            
            <CardGrid>
                {
                    publications.map((item, index) => 
                        <CardDoc
                            key             = {index                        }
                            date            = {item.date                    }
                            source          = {item.source                  }
                            title           = {item.title                   }
                            type            = {item.type                    }
                            img             = {item.img                     }
                            desc            = {item.desc                    }
                            link            = {item.link                    }
                            wordCount       = {item.attributes.wordCount     }
                            isTechNews      = {item.attributes.isTechNews    }
                            isAnnouncement  = {item.attributes.isAnnouncement}
                            isDigest        = {item.attributes.isDigest      }
                        />
                    )
                }
            </CardGrid>
            <DivFlex
                m_bottom="109"
                justify="center"
                render={
                    <Button
                        name="Показать больше"
                    />
                }
            />
        </DivMain>
    )
}

export default connect(
    state => ({
        state       : state.rSearch[state.rSearch.length-1],
        loading_his : state.rSearch[state.rSearch.length-1].loading_his,
        loading_obj : state.rSearch[state.rSearch.length-1].loading_his,
    }),
    // dispatch => {
    //     add => 
    // }
)
(PageResults)