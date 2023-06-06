import React from "react";
import styled from "styled-components/macro";

const DivMain = styled.div`
    min-width: 120px;
    width: 150px;
    height: 32px;
    display: flex;
    justify-content: right;
`
    const DivCol = styled.div`
        display: flex;
        width: 150px;
        height: 32px;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        margin-right: 4px;
    `
        const UserName=styled.div`
            max-width: 130px;

            height: 17px; 
            color: #000000;
            opacity: 0.7;
        `
        const BtnLogout=styled.button`
            width: 31px;
            height: 12px;
            font-size: 10px;
            border: none;
            padding:0;
            background-color: transparent;
            
            font-weight: 400;
            line-height: 12px;
            opacity: 0.4;
        `
    const UserAvatar=styled.img`
        width: 32px;
        height: 32px;
        border: none;
        letter-spacing: 0;
        border-radius: 16px;
    `

function UserAcc(props) {
    const {name, avatar} = props;

    return (
        <DivMain>
            <DivCol>
                <UserName>{name}</UserName>
                <BtnLogout>Выйти</BtnLogout>
            </DivCol>

            <UserAvatar src={avatar} alt='ava'></UserAvatar>
        </DivMain>
    )
}

export default UserAcc;