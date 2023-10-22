import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import Button from "../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";
import { RootState } from "../../reducers/reducers";
import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { auth } from "../../reducers/loginSlice";

import * as S from "./styled";

import Characters from "./Characters.svg";
import Lock from "./lock.svg";
import LoginGoogle from "./LoginGoogle.svg";
import LoginFb from "./LoginFb.svg";
import LoginYandex from "./LoginYandex.svg";

const INITED_LOGIN = true;

function PageAutorization() {
    const logged = useAppSelector((state: RootState) => state.login.logged);

    const refLogin = React.useRef<HTMLInputElement>(null);
    const refPassword = React.useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const [sumbitDis, setSumbitDis] = useState(INITED_LOGIN);
    const [stateLog, setStateLog] = useState(INITED_LOGIN ? 1 : -1);
    const [statePass, setStatePass] = useState(INITED_LOGIN ? 1 : -1);

    const dispatch = useAppDispatch();

    useEffect(() => {
        logged && navigate("/");
    });

    function fPostAuth(login: string, password: string) {
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
                    dispatch(
                        auth({
                            id: 0,
                            logged: true,
                            token: data.accessToken,
                            expire: data.expire,
                            loading: true,
                        }),
                    );

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

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        if (refLogin.current && refPassword.current) {
            e.preventDefault();
            const login = refLogin.current.value;
            const password = refPassword.current.value;
            fPostAuth(login, password);
        }
    }

    useEffect(() => {
        if (!logged) {
            const inputLoginCurr = refLogin.current;
            const inputPassCurr = refPassword.current;
            if (inputLoginCurr && inputPassCurr) {
                const inLogChange = () => {
                    setStateLog(inputLoginCurr.value === "" ? -1 : 1);
                };
                inputLoginCurr.addEventListener("input", inLogChange);

                const inputPasChange = () => {
                    setStatePass(inputPassCurr.value === "" ? -1 : 1);
                };
                inputPassCurr.addEventListener("input", inputPasChange);

                if (stateLog !== -1 && statePass !== -1) {
                    setSumbitDis(false);
                } else {
                    setSumbitDis(true);
                }

                return () => {
                    inputLoginCurr.removeEventListener("input", inLogChange);
                    inputPassCurr.removeEventListener("input", inputPasChange);
                };
            }
        }
    }, [stateLog, statePass, logged]);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    return (
        <>
            {!logged && (
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
                            $margin_bottom={6}
                            $bg_color={stateLog === 0 ? "#FF5959" : "#C7C7C7"}
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
                            $margin_bottom={6}
                            $bg_color={statePass === 0 ? "#FF5959" : "#C7C7C7"}
                            ref={refPassword}
                            type="password"
                            // defaultValue={INITED_LOGIN?"4i2385j":""}
                            // defaultValue={INITED_LOGIN&&"KHKfTXb"}
                            // defaultValue={INITED_LOGIN&&"LuwAwJf"}
                            defaultValue={INITED_LOGIN ? "4i2385j" : ""}
                        ></S.Input>
                        <S.DivErr2>
                            {!statePass && "Неправильный пароль"}
                        </S.DivErr2>
                        <Button
                            form="formAutorization"
                            type="submit"
                            width={isMobile ? 305 : 367 + 12}
                            $margin_bottom={15}
                            disabled={sumbitDis}
                            onClick={handleClick}
                        >
                            Войти
                        </Button>
                        <S.RestoreContainer>
                            <S.LinkRestore>Восстановить пароль</S.LinkRestore>
                        </S.RestoreContainer>
                        <S.Label $margin_bottom={15} display="flex">
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
            )}
        </>
    );
}

export { PageAutorization };
