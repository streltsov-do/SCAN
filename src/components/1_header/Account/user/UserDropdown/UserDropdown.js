import React, { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components/macro";
import DivFlex from "../../../../utils/DivFlex/DivFlex";

import IconMenu from './IconMenu.svg';

const Btn = styled.button`
    width: 30px;
    height: 25px;
    border: none;
    padding: 0;
    background-color: ${props => props.enable?"lightgrey":"transparent"};
`

const BtnDrop = styled.button`
    /* z-index: 999; */
`


const UserDropdown = (props) => {
    const { login, logout, logged } = props;
    const navigate=useNavigate();

    const [showDrop, setShowDrop] = useState(false);

    const handleDrop = (e) => {
        e.preventDefault();
        setShowDrop(!showDrop);
    }

    const handleBtnDrop = (index) => {
        switch (index) {
            case 0:
                navigate('/');
                break;
            case 1:
                if (logged){
                    logout();
                } else {
                }
                break;
            case 2:
                navigate('/autorization');
                break;
            default:
                break;
        }
        setShowDrop(false);
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
    
    const items=(logged)?itemsLogged:itemsUnlogged;

    return(
        <DivFlex
            direction="column"
            position="relative"
            zindex={2}
            render = {
                <>
                    <Btn 
                        onClick={handleDrop}
                        enable={showDrop}
                    >
                        <img src={IconMenu} alt="Меню"></img>
                    </Btn>
                    {
                        showDrop?
                            <DivFlex
                                position="absolute"
                                top={25}
                                right={0}
                                direction="column"
                                overflow_y="hidden"
                                render={
                                    items.map((item,index) =>
                                        <BtnDrop
                                            key={item}
                                            onClick={(e)=> handleBtnDrop(index)}
                                        >
                                            {item}
                                        </BtnDrop>
                                    )
                                }
                            />
                        :   
                            <></>
                    }
                </>
            }
        />
    )
}

export default UserDropdown;