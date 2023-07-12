import React from "react";
import styled from "styled-components/macro";
import {useMediaQuery} from "react-responsive";

import Button from "../../custom/Button/Button";
import { mediaMaxWidh } from "../../../../utils/consts";

import CheckMark from './CheckMark.svg'

const cWidth =415;
const cHeight=540;
const tHeight=132;

const cMediaWidth =335;
const cMediaHeight=512;
const tMediaHeight=132;

const Div=styled.div`
    width: ${cWidth}px;
    height: ${cHeight}px;
    background: #FFFFFF;
    border: 2px solid #${props => props.color};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position: relative;
    @media (max-width: ${mediaMaxWidh}) {
        width: ${cMediaWidth}px;
        height: ${cMediaHeight}px;
    }
`
    const TitleDiv=styled.div`
        width: ${cWidth}px;
        height: ${tHeight}px;
        background: #${props => props.color};
        border-radius: 10px 10px 0px 0px;
        padding: 30px 0 0 30px;
        display: flex;
        position: relative;
        margin: -2px 0 0 -2px;
        @media (max-width: ${mediaMaxWidh}) {
            width: ${cMediaWidth}px;
            height: ${tMediaHeight}px;
        }
    `
        const Title=styled.div`
            color: ${props => props.color};
            font-weight: 500;
            font-size: 30px;
            line-height: 36px;
            margin-bottom: 10px;
        `
        const TitleDesc=styled.div`
            color: ${props => props.color};
            font-size: 18px;
            line-height: 22px;
        `
        const IconImg=styled.img`
            font-size: 18px;
            line-height: 22px;
            position: absolute;
            width   : ${props => props.width    }px;
            height  : ${props => props.height   }px;
            top     : ${props => props.top      }px;
            right   : ${props => props.right    }px;
            @media (max-width: ${mediaMaxWidh}) {
                width: 59px;
                height: 53.181px;
                top   : 13px;
                right : 5px;
            }
        `
    const MainDiv=styled.div`
        width: ${cWidth}px;
        height: ${cHeight-tHeight}px;
        padding: 33px 0 24px 30px;
        position: relative;
        @media (max-width: ${mediaMaxWidh}) {
            width: ${cMediaWidth}px;
            height: ${cMediaHeight-tHeight}px;
            padding: 20px 0 0 24px;
        }
    `   
        const Current=styled.div`
            position: absolute;
            width: 134px;
            height: 24px;
            background: #3BA5E0;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            right: 10px;
            top:12px;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 12px;
                right: 10px;
                top:6px;
                width: 120px;
                height: 18px;
            }
        `
        const PriceDiv=styled.div`
            display: flex;
            gap: 19px;
            margin-bottom: 10px;
            align-items: center;
            @media (max-width: ${mediaMaxWidh}) {
                gap: 10px;
            }
        `
            const PriceSale=styled.div`
                font-weight: 500;
                font-size: 30px;
                line-height: 36px;
                /* @media (max-width: ${mediaMaxWidh}) {
                    font-size: 30px;
                    letter-spacing: 0.3px;
                } */
            `
            const Price=styled.div`
                font-weight: 500;
                font-size: 25px;
                line-height: 30px;
                text-decoration: line-through;
                opacity: 0.5;
                color: #000;
            `
        const PriceInstallment=styled.div`
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 59px;
            height: 22px;
            @media (max-width: ${mediaMaxWidh}) {
                font-weight: 400;
                line-height: normal;
                display: flex;
                width: 276px;
                height: 44px;
                margin-bottom: 37px;
            }
        `
        const TariffDesc=styled.div`
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 10px;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 18px;
                letter-spacing: 0.18px;
                line-height: normal;
            }
        `
            const TariffOptions=styled.div`
                display: flex;
                flex-direction: column;
                gap: 5px;
                margin-bottom: 55px;
            `
                const OptionDiv=styled.div`
                    display: flex;
                `
                    const Check=styled.img`
                        width: 20px;
                        height: 20px;
                        margin-right: 8px;
                        @media (max-width: ${mediaMaxWidh}) {
                            width: 16px;
                        }
                    `
                    const OptionDecs=styled.div`
                        font-size: 18px;
                        line-height: 22px;
                        @media (max-width: ${mediaMaxWidh}) {
                            font-size: 16px;
                            line-height: normal;
                            letter-spacing: 0.16px;
                        }
                    `


function Card(props) {
    const {color, price, title, titleDesc, icon, active} = props;

    const divColor  = active?color:"FFFFFF";
    const btnDesc   = active?"Перейти в личный кабинет":"Подробнее"
    const btnBg     = active?"D2D2D2":"5970FF";
    const btnColor  = active?"000000":"FFFFFF";
    
    const titleColor = (color=="000000")?"white":"black";

    const p_installment=price.installment;
    const installment=(p_installment==0)?"":`или ${p_installment} ₽/мес. при рассрочке на 24 мес.`;
    
    const isMobile = useMediaQuery({ maxWidth: mediaMaxWidh});
    
    return(
        <Div color={divColor}>
            <TitleDiv color={color}>
                <div>
                    <Title color={titleColor}>{title}</Title>
                    <TitleDesc color={titleColor}>{titleDesc}</TitleDesc>
                </div>
                <IconImg 
                    src     ={icon.img    }
                    width   ={icon.width  }
                    height  ={icon.width  }
                    top     ={icon.top    }
                    right   ={icon.right  }
                ></IconImg>
            </TitleDiv>
            <MainDiv>
                {   
                    active
                    ?   <Current>Текущий тариф</Current>
                    :   <></>
                }
                <PriceDiv>
                    <PriceSale>{price.sale} ₽</PriceSale>
                    <Price>{price.src} ₽</Price>
                </PriceDiv>
                <PriceInstallment>{installment}</PriceInstallment>
                <TariffDesc>В тариф входит:</TariffDesc>
                <TariffOptions>
                    {
                        props.options.map((item,index) => 
                            <OptionDiv key={index}>
                                <Check src={CheckMark}></Check>
                                <OptionDecs>{item}</OptionDecs>
                            </OptionDiv>
                        )
                    }
                </TariffOptions>
                <Button 
                    width       ={isMobile?286.566:355}
                    height      ={59}
                    background  ={btnBg}
                    color       ={btnColor}
                    name        ={btnDesc}
                    f_size      ={20}
                    f_height    ={24}
                    position    ="absolute"
                    bottom      ={33}
                    right       ={24}
                />
            </MainDiv>
        </Div>
    )
}

export default Card;