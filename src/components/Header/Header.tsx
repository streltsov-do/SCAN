import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HashLink } from "react-router-hash-link";

import { useAppSelector, useAppDispatch } from "../../reducers/hooks";
import { RootState } from "../../reducers/reducers";
import { logout } from "../../reducers/loginSlice";
import { MOBILE_WIDTH_BREAKPOINT, NAME } from "../../utils/consts";

import { AccInfo } from "./Account/AccInfo";
import * as S from "./styled";

import imgLogo from "./scan.svg";
import imgLogoWhite from "./scanWhite.svg";
import ava from "../../assets/ava.png";

function Header() {
    const logged = useAppSelector((state: RootState) => state.login.logged);

    const [isMenuOpened, openMenu] = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const fLogout = () => {
        localStorage.removeItem("auth");
        dispatch(logout());
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

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        logged ? fLogout() : navigate("/autorization");
        openMenu(false);
    }

    return (
        <S.HeaderDiv $opened={isMenuOpened}>
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
                    style={() => {
                        return {
                            color: "black",
                            textDecoration: "none",
                        };
                    }}
                >
                    Главная
                </NavLink>
                <S.HashLinkWrap>
                    <HashLink className="HashLinkStyled" to="/#idTariffs">
                        Тарифы
                    </HashLink>
                </S.HashLinkWrap>
                <NavLink
                    to=""
                    style={() => {
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
            />
            {isMenuOpened && (
                <S.MobileMenu $top={S.HEADER_HEIGHT}>
                    <S.MobileUl>
                        <S.NavLi>
                            <S.NavA
                                onClick={(
                                    e: React.MouseEvent<HTMLAnchorElement>,
                                ) => {
                                    e.preventDefault();
                                    openMenu(false);
                                    navigate("/");
                                }}
                                $mobile={true}
                                href="/"
                            >
                                Главная
                            </S.NavA>
                        </S.NavLi>
                        <S.NavLi>
                            <S.NavA
                                onClick={(
                                    e: React.MouseEvent<HTMLAnchorElement>,
                                ) => {
                                    openMenu(false);
                                    navigate("/");
                                }}
                                $mobile={true}
                                href="#idTariffs"
                            >
                                Тарифы
                            </S.NavA>
                        </S.NavLi>
                        <S.NavLi>
                            <S.NavA
                                onClick={(
                                    e: React.MouseEvent<HTMLAnchorElement>,
                                ) => {
                                    e.preventDefault();
                                    openMenu(false);
                                }}
                                $mobile={true}
                                href=""
                            >
                                FAQ
                            </S.NavA>
                        </S.NavLi>
                    </S.MobileUl>
                    <S.MobileADiv>
                        {!logged && (
                            <S.MobileA $mobile={false} href="#">
                                Зарегистрироваться
                            </S.MobileA>
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

export { Header };
