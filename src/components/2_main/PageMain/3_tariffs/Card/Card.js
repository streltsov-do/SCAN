import React from "react";
import styled from "styled-components/macro";

import CheckMark from './CheckMark.svg'

const cWidth=415;
const cHeight=540;
const tHeight=132;

const Container=styled.div`
    width: ${cWidth}px;
    height: ${cHeight}px;
    background: #FFFFFF;
    border: 2px solid #${props => props.color};
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    position: relative;
`
    const TitleDiv=styled.div`
        width: ${cWidth}px;
        height: ${tHeight}px;
        background: #${props => props.color};
        border-radius: 10px 10px 0px 0px;
        padding: 30px 0 0 30px;
        display: flex;
        position: relative;
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
        const Icon=styled.img`
            font-size: 18px;
            line-height: 22px;
            position: absolute;
            width   : ${props => props.width    }px;
            height  : ${props => props.height   }px;
            top     : ${props => props.top      }px;
            right   : ${props => props.right    }px;
        `
    const MainDiv=styled.div`
        width: ${cWidth}px;
        height: ${cHeight-tHeight}px;
        padding: 33px 0 24px 30px;
        position: relative;
    `
        const PriceDiv=styled.div`
            display: flex;
            gap: 19px;
            margin-bottom: 10px;
        `
            const PriceSale=styled.div`
                font-weight: 500;
                font-size: 30px;
                line-height: 36px;
            `
            const Price=styled.div`
                font-weight: 500;
                font-size: 30px;
                line-height: 36px;
                text-decoration: line-through;
                opacity: 0.5;
            `
        const PriceInstallment=styled.div`
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 59px;
            height: 22px;
        `
        const TariffDesc=styled.div`
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 10px;
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
                    `
                    const OptionDecs=styled.div`
                        font-size: 18px;
                        line-height: 22px;
                    `
        const BtnDetailed=styled.button`
            width: 355px;
            height: 59px;
            background: #5970FF;
            border-radius: 5px;
            border-style: none;
            font-size: 20px;
            line-height: 24px;
            &:hover{
                background: #D2D2D2;
                text-decoration: none;
            }
        `


function Card(props) {

    const titleColor = (props.color=="000000")?"white":"black";
    const p_installment=props.price.installment;
    const installment=(p_installment==0)?"":`или ${p_installment} ₽/мес. при рассрочке на 24 мес.`;
    return(
        <Container color={props.color}>
            <TitleDiv color={props.color}>
                <div>
                    <Title color={titleColor}>{props.title}</Title>
                    <TitleDesc color={titleColor}>{props.titleDesc}</TitleDesc>
                </div>
                <Icon 
                    src     ={props.icon.img    }
                    width   ={props.icon.width  }
                    height  ={props.icon.width  }
                    top     ={props.icon.top    }
                    right   ={props.icon.right  }
                />
            </TitleDiv>
            <MainDiv>
                <PriceDiv>
                    <PriceSale>{props.price.sale}₽</PriceSale>
                    <Price>{props.price.src}₽</Price>
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
                <BtnDetailed>{props.btn_desc}</BtnDetailed>
            </MainDiv>
        </Container>
    )
}

export default Card;