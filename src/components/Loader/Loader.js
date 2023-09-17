import React from "react";

import * as S from "./styled.js";
import loader from "./loader.svg";

const Loader = (props) => {
    const { widthDiv, widthLoader, min_widthDiv } = props;
    return (
        <S.StatsLoading width={widthDiv} min_width={min_widthDiv}>
            <S.StatsLoader
                width={widthLoader}
                src={loader}
                alt="loading"
            ></S.StatsLoader>
        </S.StatsLoading>
    );
};

export default Loader;
