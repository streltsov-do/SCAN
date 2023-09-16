import styled, { keyframes } from "styled-components/macro";

const StatsLoading = styled.div`
    width: ${(props) => props.width || 175}px;
    min-width: ${(props) => props.min_width || 175}px;
    min-height: 63px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const spin360 = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;
const StatsLoader = styled.img`
    width: ${(props) => props.width || 24}px;
    animation: ${spin360} 2s linear infinite;
`;

export { StatsLoading, StatsLoader };
