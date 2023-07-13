import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import DivFlex from "../../utils/DivFlex/DivFlex";
import Button from "../PageMain/custom/Button/Button";
import { mediaMaxWidh } from "../../utils/consts";

import Characters from './Characters.svg';
import Lock from './lock.svg';
import LoginGoogle from './LoginGoogle.svg';
import LoginFb from './LoginFb.svg';
import LoginYandex from './LoginYandex.svg';

const inited=false;

const Container=styled.div`
    display: flex;
    padding: 69px 0 80px 60px;
    position: relative;
    @media (max-width: ${mediaMaxWidh}) {
        font-size: 22px;
        line-height: normal;
        letter-spacing: 0.44px;
        padding: 22px 0 0 14px;
        flex-direction: column;
    }

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
            @media (max-width: ${mediaMaxWidh}) {
                width: auto;
                height: 104px;
                font-size: 22px;
                line-height: normal;
                letter-spacing: 0.44px;
                margin-bottom: 126px;
            }
        `
        const ImgCharacters=styled.img`
            width: 321.76px;
            height: 342.03px;
            margin-left: ${172-69}px;
            @media (max-width: ${mediaMaxWidh}) {
                margin: 0 0 79px 0;
            }
        `
    const Form=styled.form`
        width: 429px;
        height: 523px;
        padding: 25px;
        margin-left: -7px;
        background: #FFFFFF;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        position: absolute;
        right: 141px;
        top: 69px;
        @media (max-width: ${mediaMaxWidh}) {
            width: 335px;
            height: 504px;
            padding: 25px 0 0 15px;
            position: relative;
            right: 0;
            top: 0;
            margin: 0 0 49px 0;

        }
    `
        const ImgLock=styled.img`
            width: 75.22px;
            height: 92.06px;
            position: absolute;
            top: -55px;
            left: -51px;
            @media (max-width: ${mediaMaxWidh}) {
                left: 81px;
                top: -${492-504+92.06}px;
            }
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
                color: #${props => props.color};
                @media (max-width: ${mediaMaxWidh}) {
                    letter-spacing: 0.28px;
                }
            `
            const Line=styled.div`
                height: 2px;
                background-color: #${props => props.color};
                width: ${props => props.width}px;
            `
    const Label=styled.label`
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #949494;
        margin-bottom: ${props => props.m_bottom || 0};
        display: ${props => props.display || "inline"};
        @media (max-width: ${mediaMaxWidh}){
            font-size: 14px;
            line-height: normal;
            letter-spacing: 0.28px;
        }
    `
    const Input=styled.input`
        width: 379px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid ${props => props.b_color};
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        margin-top: 15px;
        margin-bottom: ${props => props.mrg_bottom}px;
        font-family: 'Inter';
        letter-spacing: 0.01em;
        font-size: 17px;
        line-height: 20px;
        @media (max-width: ${mediaMaxWidh}) {
            width: 305px;
        }
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
            color: #5970FF;
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
                width:      ${props => props.width      }px;
                height:     ${props => props.height     }px;
                margin-top: ${props => props.mrg_top    }px;
                margin-left:${props => props.mrg_left   }px;
            `

function PageAutorization(props) {
    const refLogin    =useRef(null);
    const refPassword =useRef(null);
    const navigate=useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const [sumbitDis,   setSumbitDis] = useState(false);
    const [stateLog,    setStateLog ] = useState(inited?1:-1);
    const [statePass,   setStatePass] = useState(inited?1:-1);

    const { logged } = props;

    useEffect(() => {

        if (logged){
            setIsLoading(true);
            navigate("/");
        } else {
            setIsLoading(false);
        }
    });

    function fPostAuth(login,password) {
        fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login:      login,
                password:   password,
            })
        })
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                if (data.errorCode==undefined){
                    props.auth(
                        data.accessToken,
                        data.expire,
                        true,
                        true
                    );
                    
                    const localData = {
                        token: data.accessToken,
                        expire: data.expire
                    }

                    localStorage.setItem("auth",JSON.stringify(localData))

                    navigate("/");
                } else {
                    setStatePass(0);
                    return true;
                }
            })
            .catch(() => { 
                console.log('PostAuth error')
                return false;
            });
    }

    function handleClick(e) {
        e.preventDefault();
        const login= refLogin.current.value;
        const password= refPassword.current.value;
        fPostAuth(login,password);
    }

    useEffect(() => {
        if (!isLoading){
            const inputLoginVal = refLogin.current;
            const inLogChange = () => {
                setStateLog(inputLoginVal.value==""?(-1):1);
            }
            inputLoginVal.addEventListener("input", inLogChange);

            const inputPassVal = refPassword.current;

            const inputPasChange = () => {
                setStatePass(inputPassVal.value==""?(-1):1);
            }
            inputPassVal.addEventListener("input", inputPasChange);
            
            if ((stateLog!=-1) && (statePass!=-1)){
                setSumbitDis(false);
            } else {
                setSumbitDis(true);
            }

            return () => {
                inputLoginVal.removeEventListener("input", inLogChange)
                inputPassVal.removeEventListener("input", inputPasChange)
            };
        }
    },[stateLog,statePass]);

    const isMobile = useMediaQuery({maxWidth: mediaMaxWidh});

    return(
        (!isLoading)?
            <Container>
                <div>
                    <Title>
                        Для оформления подписки<br/>
                        на тариф, необходимо<br/>авторизоваться.
                    </Title>
                    {isMobile?<></>:<ImgCharacters src={Characters}></ImgCharacters>}
                </div>
                <Form name="formAutorization">
                    <ImgLock src={Lock}></ImgLock>
                    <LinkContainer>
                        <LinkDiv >
                            <LinkAuto color="029491">Войти</LinkAuto>
                            <Line color="029491" width={isMobile?103:151}></Line>
                        </LinkDiv>
                        <LinkDiv>
                            <LinkAuto color="C7C7C7">Зарегистрироваться</LinkAuto>
                            <Line color="C7C7C7" width={isMobile?182:213}></Line>
                        </LinkDiv>
                    </LinkContainer>
                    <Label htmlFor="lblLogin">Логин или номер телефона:</Label>
                        <Input 
                            name="lblLogin" 
                            form="formAutorization" 
                            mrg_bottom={6} 
                            b_color={(stateLog==0)?"#FF5959":"#C7C7C7"}
                            ref={refLogin}
                            defaultValue={inited?"sf_student1":""}
                        ></Input>
                        <DivFlex 
                            color="#FF5959"
                            justify="center"
                            height={17}
                            render={
                                (stateLog==0)?"Введите корректные данные":""
                            }
                        />
                    <Label htmlFor="lblPassword">Пароль:</Label>
                        <Input 
                            name="lblPassword" 
                            form="formAutorization" 
                            mrg_bottom={6} 
                            b_color={(statePass==0)?"#FF5959":"#C7C7C7"}
                            ref={refPassword} 
                            type="password"
                            defaultValue={inited?"4i2385j":""}
                        ></Input>
                        <DivFlex 
                            color="#FF5959"
                            justify="center"
                            m_bottom={7} 
                            height={17}
                            render={
                                (statePass==0)?"Неправильный пароль":""
                            }
                        />
                    <Button 
                        form="formAutorization"
                        type="submit"
                        name="Войти" 
                        width={isMobile?305:(367+12)}
                        m_bottom={15} 
                        disabled={sumbitDis}
                        onClick={handleClick}
                    />
                    <RestoreContainer>
                        <LinkRestore>Восстановить пароль</LinkRestore>
                    </RestoreContainer>
                    <Label
                        m_bottom="15px"
                        display="flex"
                    >
                        Войти через:
                    </Label>
                    <ExtLoginDiv>
                        <BtnExtLogin>
                            <ImgExtLogin 
                                src={LoginGoogle} 
                            />
                        </BtnExtLogin>
                        <BtnExtLogin>
                            <ImgExtLogin 
                                src={LoginFb} 
                            />
                        </BtnExtLogin>
                        <BtnExtLogin>
                            <ImgExtLogin 
                                src={LoginYandex}
                            />
                        </BtnExtLogin>
                    </ExtLoginDiv>
                </Form>
                
                {isMobile?<ImgCharacters src={Characters}></ImgCharacters>:<></>}
            </Container>
        :
            <></>
    )
}

export default connect(
    state => ({
        logged  : state.rLogin[state.rLogin.length-1].logged,
    }),
    dispatch => ({
        auth: (token,expire,logged,loading) => {
            dispatch({ 
                type    : 'AUTH',
                id      : 0,
                logged  : logged,
                token   : token,
                expire  : expire,
                loading : loading,
            });
        }
    })
)(PageAutorization);