import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    color: red;
`;

function PageNotFound() {
    return (
        <Div>
            <h1>Страница не найдена!</h1>
        </Div>
    );
}

export { PageNotFound };
