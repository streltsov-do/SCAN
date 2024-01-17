import styled from "styled-components/macro";

import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";

const PADDING_LEFT = 69;

const DivBackground = styled.div`
    position: relative;
    overflow-x: hidden;
`;

const DivMain = styled.div`
    position: relative;
    padding: ${PADDING_LEFT}px 0 0 60px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        padding: 20px 0 0 12px;
    }
`;

const ImgSearching = styled.img<{
    $left: string;
    $right: string;
}>`
    position: absolute;
    top: 20px;
    left: ${(props) => props.$left};
    right: ${(props) => props.$right};
    z-index: 1;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        position: relative;
        left: 0;
        right: 0;
        width: 350px;
        height: 233.731px;
        margin-bottom: 59.27px;
    }
`;
const DivTitle = styled.div<{
    $mobile: boolean;
}>`
    display: flex;
    flex-direction: column;
    gap: 36px;
    z-index: 2;
    margin-bottom: ${(prop) => (prop.$mobile ? 21 : 127)}px;
    position: relative;
    /* overflow-x: hidden; */
`;

const Title = styled.h1`
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 0.04em;
    color: #000000;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        width: 344px;
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
    }
`;
const TitleDesc = styled.h3`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.02em;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 18px;
        line-height: normal;
        letter-spacing: 0.18px;
        width: 344px;
    }
`;
const Title2 = styled.h2<{
    $margin_bottom?: number;
}>`
    font-family: "Ferry";
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: #000000;
    margin-bottom: ${(props) => props.$margin_bottom || 0}px;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        font-size: 28px;
        line-height: normal;
        letter-spacing: 0.28px;
        width: 335px;
    }
`;
const Title2Desc = styled.h4<{
    $margin_bottom?: number;
}>`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: normal;
    letter-spacing: 0.36px;
    margin-bottom: ${(props) => props.$margin_bottom || 0}px;
    color: #949494;
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        letter-spacing: 0.18px;
    }
`;
const DivBtn = styled.div<{
    $mobile: boolean;
}>`
    display: flex;
    justify-content: center;
    width: ${(prop) => (prop.$mobile ? "335px" : "auto")};
    margin-bottom: ${(prop) => (prop.$mobile ? 57 : 109)}px;

    /* $margin_bottom={isMobile ? 57 : 109}
    justify="center"
    width={isMobile ? 335 : ""} */
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 641px 641px;
    gap: 20px;
    @media (max-width: ${641 * 2 + 20 + 60 + 16}px) {
        grid-template-columns: 641px;
    }
    @media (max-width: ${MOBILE_WIDTH_BREAKPOINT}) {
        grid-template-columns: 375px;
    }
`;

export {
    DivMain,
    DivBackground,
    ImgSearching,
    DivTitle,
    Title,
    TitleDesc,
    Title2,
    Title2Desc,
    DivBtn,
    CardGrid,
    PADDING_LEFT,
};
