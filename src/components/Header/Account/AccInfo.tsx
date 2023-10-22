import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";
import { RootState } from "../../../reducers/reducers";
import { useAppSelector, useAppDispatch } from "../../../reducers/hooks";
import { end_loading } from "../../../reducers/loginSlice";

import UserStats from "./UserStats/UserStats";
import UserAcc from "./user/UserAcc";
import BtnMenu from "./user/BtnMenu/BtnMenu";
import * as S from "./styled";

const urlBase = "https://gateway.scan-interfax.ru";

function AccInfo(props: {
    name: string;
    avatar: string;
    openMenu: (bool: boolean) => void;
    isMenuOpened: boolean;
}) {
    const { name, avatar, openMenu, isMenuOpened } = props;

    const logged = useAppSelector((state: RootState) => state.login.logged);
    const loading = useAppSelector((state: RootState) => state.login.loading);
    const token = useAppSelector((state: RootState) => state.login.token);

    const dispatch = useAppDispatch();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const [stats, setStats] = useState({
        used: 0,
        limit: 0,
    });

    useEffect(() => {
        let localData: string | null = localStorage.getItem("userData");

        if (typeof localData === "string") {
            setStats(JSON.parse(localData));
        }
        if (loading) {
            fGetAccInfo(token);
        }
    }, [loading]);

    function fGetAccInfo(token: string) {
        fetch(urlBase + "/api/v1/account/info", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                return Promise.reject(response);
            })
            .then((data) => {
                let userData = {
                    used: data.eventFiltersInfo.usedCompanyCount,
                    limit: data.eventFiltersInfo.companyLimit,
                };
                setStats(userData);

                localStorage.setItem("userData", JSON.stringify(userData));

                dispatch(end_loading());
            })
            .catch(() => {
                console.log("AccInfo error");
            });
    }

    return (
        <>
            {logged ? (
                <>
                    <S.Stats>
                        <UserStats
                            loading={loading}
                            used={stats.used}
                            limit={stats.limit}
                        />
                    </S.Stats>

                    {isMobile ? (
                        <BtnMenu
                            openMenu={openMenu}
                            isMenuOpened={isMenuOpened}
                        />
                    ) : (
                        <UserAcc name={name} avatar={avatar} />
                    )}
                </>
            ) : isMobile ? (
                <BtnMenu openMenu={openMenu} isMenuOpened={isMenuOpened} />
            ) : (
                <S.Autorization>
                    <S.Astyled href="#">Зарегистрироваться</S.Astyled>

                    <S.Separator></S.Separator>

                    <Link to="/autorization">
                        <S.BtnLogin>Войти</S.BtnLogin>
                    </Link>
                </S.Autorization>
            )}
        </>
    );
}

export { AccInfo };
