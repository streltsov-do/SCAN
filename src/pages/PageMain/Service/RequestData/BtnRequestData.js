import React from "react";
import styled from "styled-components/macro";

const BtnRequestData = styled.button`
    width: 335px;
    height: 59px;
    background: #5970ff;
    border-radius: 5px;
    border-style: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em;
    color: #ffffff;
`;

function BtnRequestData(req) {
    return <BtnRequestData>Запросить данные</BtnRequestData>;
}
