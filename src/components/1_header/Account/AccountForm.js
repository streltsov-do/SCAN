import React from "react";
import styled from "styled-components/macro";

import Logged from "./logged/Logged";
import UserAcc from "./user/UserAcc";

const Stats = styled.div`
    width: 175px;
    height: 63px;
    /* background: #D9D9D9; */
    /* opacity: 0.3; */
    background: rgba(217,217,217, 0.3);
    border-radius: 5px;
    padding: 0;

    display: flex;
    /* display: none; */
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    gap: 7px;
`


const Autorization=styled.div`
    min-width: 251px;
    height: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
    const Astyled=styled.a`
        color: #000000;
        opacity: 0.4;
        text-decoration: none;
    `
    const Separator=styled.div`
        width: 2px;
        height: 26px;
        background: #029491;
        opacity: 0.6;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    `
    const BtnLogin=styled.button`
        width: 65px;
        height: 26px;
        background: #7CE3E1;
        border-radius: 5px;
        border-style: none;
        
        font-size: 14px;
        line-height: 17px;
        font-weight: 500;
        letter-spacing: 0.01em;
    `

function AccountForm(props) {

    const {logged, loading, name, avatar} = props;

    
    return(
        <>
            {
                logged?
                    <>
                        <Stats>
                            <Logged loading={loading}></Logged>
                        </Stats>

                        <UserAcc name={name} avatar={avatar}></UserAcc>
                    </>
                :
                    <Autorization>
                        <Astyled href="#">Зарегистрироваться</Astyled>

                        <Separator></Separator>

                        <BtnLogin>Войти</BtnLogin>
                    </Autorization>
            }
        </>
    )
}

export default AccountForm;
