import React from "react";
import styled from "styled-components/macro";

const Div = styled.div`
    display: flex;
    height: 200px;
    justify-content: center;
    align-items: center;
    color: red;
`;
function NotFound() {
    return (
        <Div>
            <h1>Страница не найдена!</h1>
        </Div>
    );
}

export { NotFound };
