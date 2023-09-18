import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./sliderMain.css";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import Slide from "./Slide/Slide";
import { ARR_SLIDES } from "./consts";

const Div = styled.div`
    /* height: 430px; */
    height: ${(props) => props.height}px;
    width: ${(props) => props.num * props.width}px;
    margin-bottom: ${(props) => props.m_bottom}px;
`;

function Carousel() {
    const refDiv = useRef(null);
    const [slideNum, setSlideNum] = useState(1);

    const handeResize = () => {
        const vOut = (window.innerWidth - 51 * 2 - 10) / 430;
        if (vOut !== slideNum && vOut > 1) {
            setSlideNum(parseInt(vOut));
        }
    };

    useEffect(() => {
        handeResize();
    });

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [slideNum]);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        row: 1,
        vertical: false,
        slidesToShow: slideNum,
        slidesToScroll: slideNum,
        height: 230,
    };

    return (
        <>
            <Div
                num={slideNum}
                ref={refDiv}
                width={isMobile ? 298 + 30 : 430}
                height={isMobile ? 188 + 30 : 255}
                m_bottom={isMobile ? 80 : 0}
            >
                <Slider {...settings} className="sliderMain">
                    {ARR_SLIDES.map((item, index) => (
                        <Slide
                            key={index}
                            icon={item.icon}
                            desc={item.desc}
                            alt={item.alt}
                        />
                    ))}
                </Slider>
            </Div>
        </>
    );
}
export default Carousel;
