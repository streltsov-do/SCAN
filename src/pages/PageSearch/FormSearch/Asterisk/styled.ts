import styled from "styled-components/macro";

const Container = styled.div`
    position: relative;
`;
const DivMain = styled.div`
    position: relative;
    width: 13px;
    height: 30px;
`;
const Input1 = styled.div<{
    $good: boolean;
    $top?: number;
    $left?: number;
}>`
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.03em;
    position: absolute;
    color: ${(props) => (props.$good ? "black" : "#FF5959")};
    top: ${(props) => props.$top || -9}px;
    left: ${(props) => props.$left || -2}px;
`;

export { Container, DivMain, Input1 };
