import React from "react";
import styled from "styled-components/macro";

import Icon1 from './icon1.svg';
import Icon2 from './icon2.svg';
import Icon3 from './icon3.svg';

import Card from "./Card/Card";

const Container = styled.div`
    width: 1320px;
    height: 664px;
    position: relative;
`
    const Title = styled.div`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 45px;
        line-height: 54px;
        margin-bottom: 70px;
    `
    const gap = 37;
    const RatesMain=styled.div`
        display: flex;
        justify-content: space-between;
        gap: ${gap}px;
        height: 540px;
        width: ${415*3+gap*2};
        position: relative;
    `

const arr=[
    {
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
        btn_desc: "Перейти в личный кабинет",
    },
    {
        title: "Pro",
        titleDesc: "Для HR и фрилансеров",
        icon: {
            img: Icon2,
            width: 93.76,
            height: 103.97,
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
        btn_desc: "Подробнее",
    },
    {
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
        btn_desc: "Подробнее",
    }
];

function Tariffs() {
    return (
        <Container>
            <Title>наши тарифы</Title>
            <RatesMain>
                {
                    arr.map((item,index) => 
                        <Card 
                            key         ={index} 
                            title       ={item.title    }
                            titleDesc   ={item.titleDesc}
                            icon        ={item.icon     }
                            price       ={item.price    }
                            options     ={item.options  }
                            btn_desc    ={item.btn_desc }
                        />
                    )
                }
            </RatesMain>
        </Container>
    )
}

export default Tariffs;