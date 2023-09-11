import React from "react";
import styled from "styled-components/macro";

import Service from "./1_service/Service";
import Advantages from "./2_advantages/Advantages";
import Tariffs from "./3_tariffs/Tariffs";
import { mediaMaxWidh } from "../../utils/consts";

const Container = styled.div`
    background: #FFFFFF;
    padding: 51px 0 118px 51px;
    position: relative;
    @media (max-width: ${mediaMaxWidh}) {
        padding: 20px 0 0 14px;
    }
`

export default function PageMain(props){
    const {logged, tariff} = props;
    return(
        <Container>
            <Service
                logged={logged}
            />
            <Advantages/>
            <Tariffs 
                logged={logged}
                tariff={tariff}
            />
        </Container>
    )
}