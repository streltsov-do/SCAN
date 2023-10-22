import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 22px;
    gap: 17px;
`;
const Input = styled.input`
    width: 20px;
    height: 20px;
`;
const Label = styled.label<{$enabled: boolean}>`
    color: #000000;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.03em;
    opacity: ${(props) => (props.$enabled ? 1 : 0.4)};
`;

export { Container, Input, Label };
