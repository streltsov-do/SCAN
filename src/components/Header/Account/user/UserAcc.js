import React from "react";

import * as S from "./styled.js";

function UserAcc(props) {
    const { logout, name, avatar } = props;

    function handleClick(e) {
        localStorage.removeItem("auth");
        logout();
    }

    return (
        <S.DivMain>
            <S.DivCol>
                <S.UserName>{name}</S.UserName>
                <S.BtnLogout onClick={handleClick}>Выйти</S.BtnLogout>
            </S.DivCol>

            <S.UserAvatar src={avatar} alt="ava"></S.UserAvatar>
        </S.DivMain>
    );
}

export default UserAcc;
