import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import Button from "../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

import * as S from "./styled.js";

import Characters from "./Characters.svg";
import Lock from "./lock.svg";
import LoginGoogle from "./LoginGoogle.svg";
import LoginFb from "./LoginFb.svg";
import LoginYandex from "./LoginYandex.svg";

const INITED_LOGIN = true;

function PageAutorization(props) {
    const refLogin = useRef(null);
    const refPassword = useRef(null);
    const navigate = useNavigate();

    const [sumbitDis, setSumbitDis] = useState(INITED_LOGIN);
    const [stateLog, setStateLog] = useState(INITED_LOGIN ? 1 : -1);
    const [statePass, setStatePass] = useState(INITED_LOGIN ? 1 : -1);

    const { logged } = props;

    useEffect(() => {
        logged && navigate("/");
    });

    function fPostAuth(login, password) {
        fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                login: login,
                password: password,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.errorCode === undefined) {
                    props.auth(data.accessToken, data.expire, true, true);

                    const localData = {
                        token: data.accessToken,
                        expire: data.expire,
                    };

                    localStorage.setItem("auth", JSON.stringify(localData));

                    navigate("/");
                } else {
                    setStatePass(0);
                    return true;
                }
            })
            .catch(() => {
                console.log("PostAuth error");
                return false;
            });
    }

    function handleClick(e) {
        e.preventDefault();
        const login = refLogin.current.value;
        const password = refPassword.current.value;
        fPostAuth(login, password);
    }

    useEffect(() => {
        if (!logged) {
            const inputLoginVal = refLogin.current;
            const inLogChange = () => {
                setStateLog(inputLoginVal.value === "" ? -1 : 1);
            };
            inputLoginVal.addEventListener("input", inLogChange);

            const inputPassVal = refPassword.current;

            const inputPasChange = () => {
                setStatePass(inputPassVal.value === "" ? -1 : 1);
            };
            inputPassVal.addEventListener("input", inputPasChange);

            if (stateLog !== -1 && statePass !== -1) {
                setSumbitDis(false);
            } else {
                setSumbitDis(true);
            }

            return () => {
                inputLoginVal.removeEventListener("input", inLogChange);
                inputPassVal.removeEventListener("input", inputPasChange);
            };
        }
    }, [stateLog, statePass, logged]);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        !logged && (
            <S.Container>
                <div>
                    <S.Title>
                        Для оформления подписки
                        <br />
                        на тариф, необходимо
                        <br />
                        авторизоваться.
                    </S.Title>
                    {!isMobile && (
                        <S.ImgCharacters src={Characters}></S.ImgCharacters>
                    )}
                </div>
                <S.Form name="formAutorization">
                    <S.ImgLock src={Lock}></S.ImgLock>
                    <S.LinkContainer>
                        <S.LinkDiv>
                            <S.LinkAuto color="029491">Войти</S.LinkAuto>
                            <S.Line
                                color="029491"
                                width={isMobile ? 103 : 151}
                            ></S.Line>
                        </S.LinkDiv>
                        <S.LinkDiv>
                            <S.LinkAuto color="C7C7C7">
                                Зарегистрироваться
                            </S.LinkAuto>
                            <S.Line
                                color="C7C7C7"
                                width={isMobile ? 182 : 213}
                            ></S.Line>
                        </S.LinkDiv>
                    </S.LinkContainer>
                    <S.Label htmlFor="lblLogin">
                        Логин или номер телефона:
                    </S.Label>
                    <S.Input
                        name="lblLogin"
                        form="formAutorization"
                        mrg_bottom={6}
                        b_color={stateLog === 0 ? "#FF5959" : "#C7C7C7"}
                        ref={refLogin}
                        // defaultValue={INITED_LOGIN?"sf_student1":""}
                        // defaultValue={INITED_LOGIN&&"sf_student10"}
                        // defaultValue={INITED_LOGIN&&"sf_student5"}
                        defaultValue={INITED_LOGIN ? "sf_student1" : ""}
                    ></S.Input>
                    <S.DivErr1>
                        {!stateLog && "Введите корректные данные"}
                    </S.DivErr1>
                    <S.Label htmlFor="lblPassword">Пароль:</S.Label>
                    <S.Input
                        name="lblPassword"
                        form="formAutorization"
                        mrg_bottom={6}
                        b_color={statePass === 0 ? "#FF5959" : "#C7C7C7"}
                        ref={refPassword}
                        type="password"
                        // defaultValue={INITED_LOGIN?"4i2385j":""}
                        // defaultValue={INITED_LOGIN&&"KHKfTXb"}
                        // defaultValue={INITED_LOGIN&&"LuwAwJf"}
                        defaultValue={INITED_LOGIN ? "4i2385j" : ""}
                    ></S.Input>
                    <S.DivErr2>{!statePass && "Неправильный пароль"}</S.DivErr2>
                    <Button
                        form="formAutorization"
                        type="submit"
                        name="Войти"
                        width={isMobile ? 305 : 367 + 12}
                        m_bottom={15}
                        disabled={sumbitDis}
                        onClick={handleClick}
                    />
                    <S.RestoreContainer>
                        <S.LinkRestore>Восстановить пароль</S.LinkRestore>
                    </S.RestoreContainer>
                    <S.Label m_bottom="15px" display="flex">
                        Войти через:
                    </S.Label>
                    <S.ExtLoginDiv>
                        <S.BtnExtLogin>
                            <S.ImgExtLogin src={LoginGoogle} />
                        </S.BtnExtLogin>
                        <S.BtnExtLogin>
                            <S.ImgExtLogin src={LoginFb} />
                        </S.BtnExtLogin>
                        <S.BtnExtLogin>
                            <S.ImgExtLogin src={LoginYandex} />
                        </S.BtnExtLogin>
                    </S.ExtLoginDiv>
                </S.Form>

                {isMobile && (
                    <S.ImgCharacters src={Characters}></S.ImgCharacters>
                )}
            </S.Container>
        )
    );
}

export default connect(
    (state) => ({
        logged: state.login.logged,
    }),
    (dispatch) => ({
        auth: (token, expire, logged, loading) => {
            dispatch({
                type: "AUTH",
                id: 0,
                logged: logged,
                token: token,
                expire: expire,
                loading: loading,
            });
        },
    }),
)(PageAutorization);
