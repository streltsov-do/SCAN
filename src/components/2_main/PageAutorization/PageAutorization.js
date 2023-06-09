import React from "react";
import styled from "styled-components";

import Characters from './Characters.svg';
import Lock from './lock.svg';
import LoginGoogle from './LoginGoogle.svg';
import LoginFb from './LoginFb.svg';
import LoginYandex from './LoginYandex.svg';
import Button from "../PageMain/custom/Button/Button";

const Container=styled.div`
    display: flex;
    padding: 69px 0 80px 60px;
`
    // div
        const Title=styled.div`
            width: 817px;
            height: 144px;
            font-family: 'Ferry';
            font-style: normal;
            font-weight: 900;
            font-size: 40px;
            line-height: 48px;
            letter-spacing: 0.02em;
            margin-bottom: 13.9px;
        `
        const Img=styled.img`
            width: 321.76px;
            height: 342.03px;
            margin-left: ${172-69}px;
        `
    const Form=styled.form`
        width: 429px;
        height: 523px;
        padding: 25px;
        margin-left: -7px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        position: relative;
    `
        const ImgLock=styled.img`
            width: 75.22px;
            height: 92.06px;
            position: absolute;
            top: -55px;
            left: -51px;
        `
        const LinkContainer=styled.div`
            display: flex;
            gap: 15px;
            margin-bottom: 40px;
        `
            const LinkDiv=styled.div`
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            `
            const LinkAuto=styled.a`
                font-size: 16px;
                line-height: 19px;
                letter-spacing: 0.02em;
                color: ${props => props.color};
            `
            const Line=styled.div`
                height: 2px;
                background-color: #${props => props.color};
                width: ${props => props.width}px;
            `
    const Text=styled.div`
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        margin-bottom: 15px;
        color: #949494;
    `
    const Input=styled.input`
        width: 379px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #C7C7C7;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        margin-bottom: ${props => props.mrg_bottom}px;
    `
    const RestoreContainer=styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    `
        const LinkRestore=styled.a`
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.02em;
            text-decoration-line: underline;
            color: #5970FF;
            text-align: center;
        `
    
    const ExtLoginDiv=styled.div`
        display: flex;
        gap: 10px;
    `
        const BtnExtLogin=styled.button`
            width: 96px;
            height: 31px;
            border: 1px solid rgba(89, 112, 255, 0.51);
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFFFFF;
        `
            const ImgExtLogin=styled.img`
                width: ${props => props.width}px;
                height: ${props => props.height}px;
                margin-top: ${props => props.mrg_top}px;
                margin-left: ${props => props.mrg_left}px;
            `

export default function PageAutorization() {
    return(
        <Container>
            <div>
                <Title>
                    Для оформления подписки<br/>
                    на тариф, необходимо<br/>авторизоваться.
                </Title>
                <Img src={Characters}></Img>
            </div>
            <Form>
                <ImgLock src={Lock}></ImgLock>
                <LinkContainer>
                    <LinkDiv >
                        <LinkAuto>Войти</LinkAuto>
                        <Line color="029491" width={151}></Line>
                    </LinkDiv>
                    <LinkDiv>
                        <LinkAuto>Зарегистрироваться</LinkAuto>
                        <Line color="C7C7C7" width={213}></Line>
                    </LinkDiv>
                </LinkContainer>
                <Text>Логин или номер телефона:</Text>
                <Input mrg_bottom={20}></Input>
                <Text>Пароль:</Text>
                <Input mrg_bottom={30}></Input>
                <Button name="Войти" width={367+12} m_bottom={15} disabled={true}  />
                <RestoreContainer>
                    <LinkRestore>Восстановить пароль</LinkRestore>
                </RestoreContainer>
                <Text>Войти через:</Text>
                <ExtLoginDiv>
                    <BtnExtLogin>
                        <ImgExtLogin 
                            src={LoginGoogle} 
                            // width={59.46} 
                            // height={19.57}
                            // mrg_top={6}
                            // mrg_left={18}
                        />
                    </BtnExtLogin>
                    <BtnExtLogin>
                        <ImgExtLogin 
                            src={LoginFb} 
                            // width={59.46} 
                            // height={19.57}
                            // mrg_top={10}
                            // mrg_left={18}
                        />
                    </BtnExtLogin>
                    <BtnExtLogin>
                        <ImgExtLogin 
                            src={LoginYandex}
                            // width={56} 
                            // height={16.22}
                            // mrg_top={7}
                            // mrg_left={20}
                        />
                    </BtnExtLogin>
                </ExtLoginDiv>
            </Form>
        </Container>
    )
}