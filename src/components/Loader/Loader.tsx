import React from "react";

import * as S from "./styled";

import loader from "./loader.svg";

const Loader = (props: {
    widthDiv: number;
    widthLoader: number;
    widthDivMin?: number;
}) => {
    const { widthDiv, widthLoader, widthDivMin } = props;
    return (
        <S.StatsLoading width={widthDiv} $min_width={widthDivMin}>
            <S.StatsLoader
                width={widthLoader}
                src={loader}
                alt="loading"
            ></S.StatsLoader>
        </S.StatsLoading>
    );
};

export default Loader;
