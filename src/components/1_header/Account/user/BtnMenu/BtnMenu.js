import React, { useState } from "react";
import { styled } from "styled-components/macro";
import DivFlex from "../../../../utils/DivFlex/DivFlex";

import IconMenu from './IconMenu.svg';
import ExitMenu from './Exit.svg';

const Btn = styled.button`
    width: 30px;
    height: 25px;
    border: none;
    padding: 0;
    background-color: transparent;
`

const BtnDrop = styled.button`
    /* z-index: 999; */
`


const BtnMenu = (props) => {
    const { openMenu, isMenuOpened } = props;

    const [showDrop, setShowDrop] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setShowDrop(!showDrop);
        openMenu(!isMenuOpened);
    }


    const itemsUnlogged = [
        "Главная",
        "Зарегистрироваться",
        "Войти"
    ];
    const itemsLogged = [
        "Главная",
        "Выйти"
    ];
    

    return(
        <DivFlex
            direction="column"
            position="relative"
            render = {
                <>
                    <Btn 
                        onClick={handleDrop}
                    >
                        <img 
                            src={isMenuOpened?ExitMenu:IconMenu} 
                            alt="Меню"
                        />
                    </Btn>
                </>
            }
        />
    )
}

export default BtnMenu;