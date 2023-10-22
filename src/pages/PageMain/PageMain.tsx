import React from "react";
import styled from "styled-components";

import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

import Service from "./Service/Service";
import Advantages from "./Advantages/Advantages";
import Tariffs from "./Tariffs/Tariffs";

const Container = styled.div`
    background: #ffffff;
    padding: 51px 0 118px 51px;
    position: relative;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding: 20px 0 0 14px;
    }
`;

export default function PageMain(props: {logged: boolean, tariff: number}) {
    const { logged, tariff } = props;
    return (
        <Container>
            <Service logged={logged} />
            <Advantages />
            <Tariffs logged={logged} tariff={tariff} />
        </Container>
    );
}
