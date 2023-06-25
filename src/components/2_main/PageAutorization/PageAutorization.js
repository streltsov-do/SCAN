import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { redirect, useNavigate } from "react-router";

import Button from "../PageMain/custom/Button/Button";
import reducer from "../../reducers/reducers";

import Characters from './Characters.svg';
import Lock from './lock.svg';
import LoginGoogle from './LoginGoogle.svg';
import LoginFb from './LoginFb.svg';
import LoginYandex from './LoginYandex.svg';
import DivFlex from "../../utils/DivFlex/DivFlex";

const inited=true;

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
                color: #${props => props.color};
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
                width:      ${props => props.width      }px;
                height:     ${props => props.height     }px;
                margin-top: ${props => props.mrg_top    }px;
                margin-left:${props => props.mrg_left   }px;
            `

function PageAutorization(props) {
    const refLogin    =useRef(null);
    const refPassword =useRef(null);
    const navigate=useNavigate();

    const [sumbitDis,   setSumbitDis] = useState(false);
    const [stateLog,    setStateLog ] = useState(inited?1:-1);
    const [statePass,   setStatePass] = useState(inited?1:-1);

    // const urlBase="https://gateway.scan-interfax.ru";

    function fPostAuth(login,password) {
        fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // login:      "sf_student1",
                // password:   "4i2385j",
                login:      login,
                password:   password,
            })
        })
            .then((response)=>{
                console.log("response",response);
                return response.json();
            })
            .then((data)=>{
                console.log("AUTH data",data);
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
                    console.log("AUTH",data.message);
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
    },[stateLog,statePass]);

    return(
        <Container>
            <div>
                <Title>
                    Для оформления подписки<br/>
                    на тариф, необходимо<br/>авторизоваться.
                </Title>
                <Img src={Characters}></Img>
            </div>
            <Form name="formAutorization">
                <ImgLock src={Lock}></ImgLock>
                <LinkContainer>
                    <LinkDiv >
                        <LinkAuto color="029491">Войти</LinkAuto>
                        <Line color="029491" width={151}></Line>
                    </LinkDiv>
                    <LinkDiv>
                        <LinkAuto color="C7C7C7">Зарегистрироваться</LinkAuto>
                        <Line color="C7C7C7" width={213}></Line>
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
                    width={367+12} 
                    m_bottom={15} 
                    disabled={sumbitDis}
                    onClick={handleClick}
                />
                <RestoreContainer>
                    <LinkRestore>Восстановить пароль</LinkRestore>
                </RestoreContainer>
                <Label>Войти через:</Label>
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
        </Container>
    )
}

export default connect(
    // state => ({
    //     logged  : state.rLogin[state.rLogin.length-1].logged,
    //     loading : state.rLogin[state.rLogin.length-1].loading,
    // }),
    null,
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