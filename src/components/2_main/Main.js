import React from "react";
import styled, {css} from 'styled-components/macro';

import Service from "./1_service/Service";
import Advantages from "./2_advantages/Advantages";
import Tariffs from "./3_tariffs/Tariffs";

const MainDiv = styled.div`
    /* height: 2867px; */
    background: #FFFFFF;
    padding: 51px 43px 118px 51px;
    position: relative;
`

function Main() {
    return (
        <MainDiv>
            <Service></Service>
            <Advantages></Advantages>
            <Tariffs></Tariffs>
        </MainDiv>
    )
}

export default Main;