import React, { useEffect, useState } from "react";
import styled from 'styled-components/macro';
import { NavLink, Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {useMediaQuery} from "react-responsive";

import AccInfo from "./Account/AccInfo";
import { mediaMaxWidh } from "../utils/consts";
// import MobileMenu from "./Account/MobileMenu/MobileMenu";

import imgLogo from './scan.svg';
import imgLogoWhite from './scanWhite.svg';

const headerHeight=93;

const HeaderDiv = styled.div`
    width: auto;
    height: ${headerHeight}px;
    background: ${props => (props.opened == "true")?"#029491":"#FFFFFF"};
    padding: 0 40px 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-clip: border-box;
    @media (max-width: ${mediaMaxWidh}) {
        padding: 0 26px 0 14px;
        /* padding: 0; */
    }
`

    const NavUl = styled.ul`
        min-width: 170px;
        width: 236px;
        height: 17px;
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 17px;
        margin-right: 10px;
        @media (max-width: ${mediaMaxWidh}) {
            display: none;
        }
    `
        const NavLi = styled.li`
        `
        const NavA = styled.a`
            text-decoration: none;
            color: ${props => props.mobile?"#fff":"#000000"};
        `

const Logo=styled.img`
    width: 141px;
    height: 141px;
    @media (max-width: ${mediaMaxWidh}) {
        width: 111px;
        height: 111px;
    }

`
const MobileMenu=styled.div`
    height: ${494-93}px;
    background-color: #029491;
    position: absolute;
    top: ${props => props.top}px;
    left: 0;
    z-index: 3;
    width: 100%;
    padding: ${141-93}px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

    const MobileUl = styled.ul`
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin: 0 0 75px 0;
        gap: 26px;
    `
        const MobileADiv=styled.div`
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            height: 18.750px;

            margin-bottom: 20.52px;
        `
        const MobileA=styled.a`
            font-family: 'Inter';
            letter-spacing: 0.16px;
            text-decoration: none;
            opacity: 0.4000000059604645;
            color: ${props => props.mobile?"#fff":"#000000"};
        `
        const MobileBtn = styled.button`
            width: 295px;
            height: 51.955px;
            border-radius: 5px;
            background: #7CE3E1;
            border-style: none;
            font-family: "Inter";
            color: #000;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.2px;
        `


function Header(props) {
    
    const { name, avatar, logout, logged } = props;
    
    const [isMenuOpened, openMenu] = useState(false);

    const navigate = useNavigate();

    const fLogout = () => {
        localStorage.removeItem("auth");
        logout();
        navigate('/');
    }
    const isMobile = useMediaQuery({ maxWidth: mediaMaxWidh });

    const handeResize = () => {
        if (!isMobile){
            openMenu(false);
        }
    }

    useEffect(() => {
        handeResize()
    });

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [isMenuOpened]);

    function handleClick(e) {
        e.preventDefault();
        logged?
            fLogout()
        :
            navigate("/autorization");
        openMenu(false);
    };

    return (
        <HeaderDiv
            opened={isMenuOpened.toString()}
        >
            <Link to="/"> {/* TODO: небольшое смещение картинки */}
                <Logo src={isMenuOpened?imgLogoWhite:imgLogo} alt="СКАН"></Logo>
            </Link>
            <NavUl>
                <NavLink to="/" style={({ isActive, isPending }) => {
                        return {
                            color: "black",
                            textDecoration: "none"
                        };
                    }}
                >
                    Главная
                </NavLink>
                <NavLi><NavA href="#idTariffs">Тарифы</NavA></NavLi>
                <NavLi><NavA href="#">FAQ</NavA></NavLi>
            </NavUl>
            <AccInfo
                name={name} 
                avatar={avatar}
                openMenu={openMenu}
                isMenuOpened={isMenuOpened}
                logout={fLogout}
            />
            {
                isMenuOpened?
                    <MobileMenu
                        top={headerHeight}
                    >
                        
                        <MobileUl>
                            {/* <NavLink 
                                onClick={(e) => {openMenu(false)}} 
                                to="/" style={({ isActive, isPending }
                                ) => {
                                    return {
                                        color: "white",
                                        textDecoration: "none"
                                    };
                                }}
                            >
                                Главная
                            </NavLink> */}
                            <NavLi><NavA onClick={(e) => {e.preventDefault(); openMenu(false); navigate('/')}} mobile="true" href="/">Главная</NavA></NavLi>
                            <NavLi><NavA onClick={(e) => {openMenu(false);}}mobile="true" href="#idTariffs">Тарифы</NavA></NavLi>
                            <NavLi><NavA onClick={(e) => {openMenu(false);}}mobile="true" href="#">FAQ</NavA></NavLi>
                        </MobileUl>
                        <MobileADiv>
                            {logged?
                                <></>   
                            :
                                <MobileA href="#">Зарегистрироваться</MobileA>
                            }
                        </MobileADiv>
                        <MobileBtn
                            onClick={handleClick}
                        >
                            {logged?"Выйти":"Войти"}
                        </MobileBtn>
                    </MobileMenu>
                :   <></>
            }
        </HeaderDiv>
    )
}
export default connect(
    state => ({
        logged  : state.rLogin[state.rLogin.length-1].logged,
    }),
    dispatch => ({
        logout: () => {
            dispatch({ type: 'LOGOUT'});
        }
    })
)(Header);
