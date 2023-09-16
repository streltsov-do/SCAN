import React from "react";

import * as S from "./styled";

export default function Checkbox(props) {
    const { name, defaultChecked, enabled, change } = props;

    return (
        <S.Container>
            <S.Input
                type="checkbox"
                value={name}
                name={name}
                defaultChecked={defaultChecked}
                onChange={change}
            ></S.Input>
            <S.Label htmlFor="Input" enabled={enabled}>
                {name}
            </S.Label>
        </S.Container>
    );
}
