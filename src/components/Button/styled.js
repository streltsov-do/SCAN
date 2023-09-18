import styled from "styled-components/macro";

const Btn = styled.button`
    width: ${(props) => props.width || 335}px;
    height: ${(props) => props.height || 59}px;
    border-radius: 5px;
    border-style: none;
    background: ${(props) => props.background};
    color: #${(props) => props.color || "FFFFFF"};
    margin-top: ${(props) =>
        props.m_top === undefined ? 0 : props.m_top + "px"};
    margin-right: ${(props) =>
        props.m_right === undefined ? 0 : props.m_right + "px"};
    margin-bottom: ${(props) =>
        props.m_bottom === undefined ? 0 : props.m_bottom + "px"};
    margin-left: ${(props) =>
        props.m_left === undefined ? 0 : props.m_left + "px"};
    position: ${(props) => props.position};
    top: ${(props) => (props.top === undefined ? "auto" : props.top + "px")};
    right: ${(props) =>
        props.right === undefined ? "auto" : props.right + "px"};
    bottom: ${(props) =>
        props.bottom === undefined ? "auto" : props.bottom + "px"};
    left: ${(props) => (props.left === undefined ? "auto" : props.left + "px")};
    align-self: ${(props) => props.align};
    justify-self: ${(props) => props.justify};
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: ${(props) => props.f_size || 22}px;
    line-height: ${(props) => props.f_height || 27}px;
    letter-spacing: 0.02em;
    &:hover {
        opacity: ${(props) => (props.disabled ? 100 : 80)}%;
    }
`;

export { Btn };