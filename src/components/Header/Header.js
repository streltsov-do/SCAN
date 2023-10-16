import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { NavHashLink } from "react-router-hash-link";

import { MOBILE_WIDTH_BREAKPOINT, NAME, ava } from "../../utils/consts";

import AccInfo from "./Account/AccInfo";
import * as S from "./styled.js";

import imgLogo from "./scan.svg";
import imgLogoWhite from "./scanWhite.svg";

function Header(props) {
    const { logout, logged } = props;

    const [isMenuOpened, openMenu] = useState(false);

    const navigate = useNavigate();

    const fLogout = () => {
        localStorage.removeItem("auth");
        logout();
        navigate("/");
    };
    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const handeResize = useCallback(() => {
        if (!isMobile) {
            openMenu(false);
        }
    }, [isMobile]);

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [handeResize]);

    function handleClick(e) {
        e.preventDefault();
        logged ? fLogout() : navigate("/autorization");
        openMenu(false);
    }

    return (
        <S.HeaderDiv opened={isMenuOpened.toString()}>
            <Link to="/">
                {" "}
                {/* TODO: небольшое смещение картинки */}
                <S.Logo
                    src={isMenuOpened ? imgLogoWhite : imgLogo}
                    alt="СКАН"
                ></S.Logo>
            </Link>
            <S.NavUl>
                <NavLink
                    to="/"
                    style={({ $isActive, $isPending }) => {
                        return {
                            color: "black",
                            textDecoration: "none",
                        };
                    }}
                >
                    Главная
                </NavLink>
                <NavHashLink
                    to="/#idTariffs"
                    style={({ $isActive, $isPending }) => {
                        return {
                            color: "black",
                            textDecoration: "none",
                        };
                    }}
                >
                    Тарифы
                </NavHashLink>
                <NavLink
                    // to="/"
                    style={({ $isActive, $isPending }) => {
                        return {
                            color: "black",
                            textDecoration: "none",
                        };
                    }}
                >
                    FAQ
                </NavLink>
            </S.NavUl>
            <AccInfo
                name={NAME}
                avatar={ava}
                openMenu={openMenu}
                isMenuOpened={isMenuOpened}
                logout={fLogout}
            />
            {isMenuOpened && (
                <S.MobileMenu top={S.HEADER_HEIGHT}>
                    <S.MobileUl>
                        <S.NavLi>
                            <S.NavA
                                onClick={(e) => {
                                    e.preventDefault();
                                    openMenu(false);
                                    navigate("/");
                                }}
                                mobile="true"
                                href="/"
                            >
                                Главная
                            </S.NavA>
                        </S.NavLi>
                        <S.NavLi>
                            <S.NavA
                                onClick={(e) => {
                                    openMenu(false);
                                    navigate("/");
                                }}
                                mobile="true"
                                href="#idTariffs"
                            >
                                Тарифы
                            </S.NavA>
                        </S.NavLi>
                        <S.NavLi>
                            <S.NavA
                                onClick={(e) => {
                                    e.preventDefault();
                                    openMenu(false);
                                }}
                                mobile="true"
                                href=""
                            >
                                FAQ
                            </S.NavA>
                        </S.NavLi>
                    </S.MobileUl>
                    <S.MobileADiv>
                        {!logged && (
                            <S.MobileA href="#">Зарегистрироваться</S.MobileA>
                        )}
                    </S.MobileADiv>
                    <S.MobileBtn onClick={handleClick}>
                        {logged ? "Выйти" : "Войти"}
                    </S.MobileBtn>
                </S.MobileMenu>
            )}
        </S.HeaderDiv>
    );
}
export default connect(
    (state) => ({
        logged: state.login.logged,
    }),
    (dispatch) => ({
        logout: () => {
            dispatch({ type: "LOGOUT" });
        },
    }),
)(Header);
