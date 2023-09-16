import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";

import UserStats from "./UserStats/UserStats";
import UserAcc from "./user/UserAcc";
import BtnMenu from "./user/BtnMenu/BtnMenu";
import * as S from "./styled.js";

import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

const urlBase = "https://gateway.scan-interfax.ru";

function AccInfo(props) {
    const {
        auth,
        token,
        logged,
        loading,
        logout,
        name,
        avatar,
        openMenu,
        isMenuOpened,
    } = props;

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const [stats, setStats] = useState({
        used: 0,
        limit: 0,
    });

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("userData"));
        if (localData != undefined) {
            setStats(localData);
        }
        if (loading) {
            fGetAccInfo(token, auth);
        }
    }, [loading]);

    function fGetAccInfo(token, loadingChange) {
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

                loadingChange(false);
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
                        <UserAcc logout={logout} name={name} avatar={avatar} />
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

export default connect(
    (state) => ({
        logged: state.login.logged,
        loading: state.login.loading,
        token: state.login.token,
    }),
    (dispatch) => ({
        auth: (loading) => {
            dispatch({
                type: "END_LOADING",
                loading: loading,
            });
        },
    }),
)(AccInfo);
