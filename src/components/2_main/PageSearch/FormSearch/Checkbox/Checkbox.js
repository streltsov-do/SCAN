import React from "react";
import styled from "styled-components/macro";

import DivFlex from "../../../../utils/DivFlex/DivFlex";

const Input=styled.input`
    /* width: 100px; */
    width: 20px;
    height: 20px;
`
const Label=styled.label`
    color: #000000;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    opacity: ${props => props.enabled?1:0.4};
`

export default function Checkbox(props){
    const {name, checked, enabled} = props;

    return(
        <DivFlex 
            height={22} 
            gap={17}
            align="center"
            render={
                <>
                    <Input type="checkbox" value={name} name={name} checked={checked} enabled={enabled}></Input>
                    <Label for="Input" enabled={enabled}>{name}</Label>
                </>
            }
        />
    )
}