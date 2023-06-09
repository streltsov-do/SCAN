import React from "react";
import styled, {css} from 'styled-components/macro';
import { keyframes } from "styled-components/macro";
import { Link } from "react-router-dom";

import {FontFerry} from '../utils/fonts';

import imgLogoSvg from './scan.svg';

import AccountForm from "./Account/AccountForm";

const HeaderDiv = styled.div`
    width: auto;
    height: 93px;
    background: #FFFFFF;
    padding: 0 40px 0 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
    // const Logo = styled.img`
    //     src: ${imgLogoSvg};
    //     width: 141px;
    //     height: 93px;
    //     alt: 'logo';
    // `

    // const LogoDiv = styled.div`
    //     width: auto;
    //     height: 93px;
    //     background: #FFFFFF;
    //     padding: 0 40px 0 60px;
    //     background-image: 'url(${imgLogoSvg})';
    // `
    // const Span = styled.span`
    //     font-weight: 400;
    //     font-size: 14px;
    //     line-height: 17px;
    //     color: #000000;
    // `
    // const Span2 = styled.span`
    //     font-family: 'Ferry';
    // `

    const NavUl = styled.ul`
        min-width: 170px;
        width: 236px;
        height: 17px;
        list-style-type: none;
        padding: 0;
        /* margin-left: 401px; */
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        margin-right: 10px;
    `
        const NavLi = styled.li`
        `
        const NavA = styled.a`
            text-decoration: none;
            color: black;
        `


function Header(props) {
    
    const {logged, loading, name, avatar} = props;

    return (
        <HeaderDiv>
            {/* <Logo></Logo>
            <Logo scr={imgLogoSvg}></Logo> */}
            {/* <LogoDiv></LogoDiv>
            <div>${imgLogoSvg}</div> */}
            <Link to="/"> {/* TODO: небольшое смещение картинки */}
                <img src={imgLogoSvg} alt="СКАН"></img>
            </Link>
            {/* <Span>Главная1</Span>
            <Span2>Главная2</Span2> */}
            <NavUl>
                <NavLi><NavA href="/" >Главная  </NavA></NavLi>
                <NavLi><NavA href="#">Тарифы   </NavA></NavLi>
                <NavLi><NavA href="#">FAQ      </NavA></NavLi>
            </NavUl>
            <AccountForm logged={logged} loading={loading} name={name} avatar={avatar}>
            </AccountForm>
            
        </HeaderDiv>
    )
}

export default Header;