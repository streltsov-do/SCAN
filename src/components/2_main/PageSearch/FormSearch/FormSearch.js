import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import Button from "../../PageMain/custom/Button/Button";
import Checkbox from "./Checkbox/Checkbox";

const Form=styled.form`
    width: 872px;
    height: 543px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 29px 0 0 44px;
    display: flex;
    gap: 11px;
    position: relative;
`
    const DivFlex1=styled.div`
        display: flex;
        flex-direction: ${props => props.row?"row":"column"};
        gap: ${props => props.gap || 30}px;
    `
        const InputDesc=styled.h3`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.03em;
            margin-bottom: 20px;
            margin-top: ${props=>props.m_top}px;
        `
        const Input=styled.input`
            width: ${props => props.width || 242}px;
            height: 43px;
            background: #FFFFFF;
            border: 1px solid #C7C7C7;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            padding-left: 22px;
            padding-right: 22px;
            
            text-align: ${props => props.align || "center"};
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.03em;
            color: rgba(148, 148, 148, 0.4);
        `

const DivGray=styled.div`
    letter-spacing: 0.03em;
    color: #949494;
`

const arr=[
    {
        desc: "Признак максимальной полноты",
        checked: true,
        enabled: true
    },
    {
        desc:"Упоминания в бизнес-контексте",
        checked: true,
        enabled: true
    },
    {
        desc:"Главная роль в публикации",
        checked: true,
        enabled: true
    },
    {
        desc:"Публикации только с риск-факторами",
        checked: false,
        enabled: false
    },
    {
        desc:"Включать технические новости рынков",
        checked: false,
        enabled: false
    },
    {
        desc:"Включать анонсы и календари",
        checked: true,
        enabled: true
    },
    {
        desc:"Включать сводки новостей",
        checked: false,
        enabled: false
    },
]

export default function FormSearch(){
    return(
        <Form>
            <DivFlex
                gap={30}
                direction="column"
                render={
                    <>
                        <div>
                            <InputDesc>ИНН компании</InputDesc>
                            <Input type="number" placeholder="10 цифр"></Input>
                        </div>

                        <div>
                            <InputDesc>Тональность</InputDesc>
                            <Input type="text" placeholder="Любая" align="start"></Input>
                        </div>
                        
                        <div>
                            <InputDesc>Количество документов в выдаче</InputDesc>
                            <Input type="number" placeholder="От 1 до 1000"></Input>
                        </div>
                        
                        <div>
                            <InputDesc m_top={9}>Диапазон поиска</InputDesc>
                            <DivFlex1 gap={20} row>
                                <Input type="text" width={176} placeholder="Дата начала" align="start"></Input>
                                <Input type="text" width={176} placeholder="Дата конца"  align="start"></Input>
                            </DivFlex1>
                        </div>
                    </>
                }
            />
            <DivFlex
                direction="column"
                gap={17}
                m_top={9}
                position="relative"
                render={
                    <>
                        {
                            (arr.map((item,index) => 
                                <Checkbox 
                                    key={index}
                                    name={item.desc}
                                    checked={item.checked}
                                    enabled={item.enabled}
                                />
                            ))
                        }
                    </>
                }
            />                                
                                
            <DivFlex
                direction="column"
                position="absolute"
                top={425}
                right={39}
                render={
                    <>
                        <Link to="/results"
                        >
                            <Button 
                                name="Поиск" 
                                width={305} 
                                align= "flex-end"
                                m_bottom={10}
                            />
                        </Link>
                        <DivGray>* Обязательные к заполнению поля</DivGray>
                    </>
                }
            />
        </Form>
    )
}