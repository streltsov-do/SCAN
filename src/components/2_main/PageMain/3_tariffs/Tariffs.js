import React from "react";
import styled from "styled-components/macro";

import Card from "./Card/Card";
import { mediaMaxWidh } from "../../../utils/consts";

import Icon1 from './icon1.svg';
import Icon2 from './icon2.svg';
import Icon3 from './icon3.svg';

const gap = 37;
const gapMedia = 40;

const Container = styled.div`
    max-width: 1320px;
    height: 664px;
    position: relative;
    
    @media (max-width: 1320px) {
            height: calc(${512*2+gapMedia*3}px);
    }

    @media (max-width: ${mediaMaxWidh}) {
        width: 375px;
        height: ${34+37 + 512*3+gapMedia*2 +43}px;
    }
`
    const Title = styled.h1`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 45px;
        line-height: 54px;
        margin-bottom: 70px;

        @media (max-width: ${mediaMaxWidh}) {
            font-size: 28px;
            line-height: normal;
            letter-spacing: 0.28px;
            margin-bottom: 37px;
        }
    `
    const RatesMain=styled.div`
        display: flex;
        justify-content: space-between;
        gap: ${gap}px;
        height: 540px;
        width: auto;
        position: relative;

        @media (max-width: 1320px) {
            display: grid;
            grid-template-columns: repeat(2,415px);
            grid-template-rows: repeat(2,540px);
            justify-content: start;
            column-gap: ${gap}px;
        }
        
        @media (max-width: ${mediaMaxWidh}) {
            display: flex;
            justify-content: space-between;
            gap: ${gap}px;
            flex-direction: column;
            justify-content: space-between;
            height: ${512*3+gapMedia*2}px;
            width : 335px;
            gap: ${gapMedia}px;
        }
    `

const arr=[
    {
        color: "FFB64F",
        title: "Beginner",
        titleDesc: "Для небольшого исследования",
        icon: {
            img: Icon1,
            width: 92.24,
            height: 83.15,
            top: 11,
            right: 15.76,
        },
        price: {
            sale: 799,
            src: 1200,
            installment: 150
        },
        options: [
            "Безлимитная история запросов",
            "Безопасная сделка",
            "Поддержка 24/7",
        ],
    },
    {
        color: "7CE3E1",
        title: "Pro",
        titleDesc: "Для HR и фрилансеров",
        icon: {
            img: Icon2,
            width: 415-(283+12.04),
            height: 132-(9.24-4),
            top: -4,
            right: 12.04,
        },
        price: {
            sale: 1299,
            src: 2600,
            installment: 279
        },
        options: [
            "Все пункты тарифа Beginner",
            "Экспорт истории",
            "Рекомендации по приоритетам",
        ],
    },
    {
        color: "000000",
        title: "Business",
        titleDesc: "Для корпоративных клиентов",
        icon: {
            img: Icon3,
            width: 96,
            height: 80.09,
            top: 23,
            right: 5,
        },
        price: {
            sale: 2379,
            src: 3700,
            installment: 0
        },
        options: [
            "Все пункты тарифа Pro",
            "Безлимитное количество запросов",
            "Приоритетная поддержка",
        ],
    }
];

function Tariffs(props) {
    const {logged, tariff} = props;

    return (
        <Container
            id="idTariffs"
        >
            <Title>наши тарифы</Title>
            <RatesMain>
                {
                    arr.map((item,index) => 
                        <Card 
                            key         ={index     }
                            active      ={logged && (tariff==index) }
                            color       ={item.color    }
                            title       ={item.title    }
                            titleDesc   ={item.titleDesc}
                            icon        ={item.icon     }
                            price       ={item.price    }
                            options     ={item.options  }
                        />
                    )
                }
            </RatesMain>
        </Container>
    )
}

export default Tariffs;