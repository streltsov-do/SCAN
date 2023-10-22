import React from "react";

import { useAppDispatch } from "../../../../reducers/hooks";
import { logout } from "../../../../reducers/loginSlice";

import * as S from "./styled";

function UserAcc(props: { name: string; avatar: string }) {
    const { name, avatar } = props;

    const dispatch = useAppDispatch();

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        localStorage.removeItem("auth");
        dispatch(logout());
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
