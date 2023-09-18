import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

const Container = styled.div`
    display: flex;
    position: relative;
    z-index: 2;
`;
const DivArrow = styled.div`
    display: flex;
    position: relative;
    width: ${(prop) => (prop.mobile ? 335 : 242)}px;
`;

const DivDrop = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: ${(prop) => (prop.mobile ? 335 : 242)}px;
    overflow-y: hidden;
    top: 43px;
    height: ${(prop) => prop.items * 43}px;
    background-color: #ffffff;
    z-index: 2;
`;

const DivDropItem = styled.div`
    display: flex;
    position: absolute;
    width: ${(prop) => (prop.mobile ? 335 : 242)}px;
    overflow-y: hidden;
    top: ${(prop) => prop.index * 43}px;
    height: ${43}px;
`;

const Btn = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 242px;
    height: 43px;
    left: 97px;
    top: 564px;
    background: #ffffff;
    border: 1px solid #c7c7c7;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    opacity: 100%;
    &:hover {
        background: #dfffff;
    }
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 335px;
    }
`;

export { Container, DivArrow, DivDrop, DivDropItem, Btn };
