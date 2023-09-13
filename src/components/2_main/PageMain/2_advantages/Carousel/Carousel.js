import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sliderMain.css';

import Slide from "./Slide/Slide";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../../utils/consts";

import Icon1 from './icon_time.svg';
import Icon2 from './icon_search.svg';
import Icon3 from './icon_lock.svg';

const arr = [
    {
        icon: Icon1,
        desc: "Высокая и оперативная скорость обработки заявки",
        alt: "time"
    },
    {
        icon: Icon2,
        desc: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
        alt: "base"
    },
    {
        icon: Icon3,
        desc: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        alt: "lock"
    },
    {
        icon: Icon1,
        desc: "Высокая и оперативная скорость обработки заявки",
        alt: "time"
    },
    {
        icon: Icon2,
        desc: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
        alt: "base"
    },
    {
        icon: Icon3,
        desc: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        alt: "lock"
    },
    {
        icon: Icon1,
        desc: "Высокая и оперативная скорость обработки заявки",
        alt: "time"
    },
    {
        icon: Icon2,
        desc: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
        alt: "base"
    },
    {
        icon: Icon3,
        desc: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
        alt: "lock"
    },
];

const Div=styled.div`
    /* height: 430px; */
    height: ${props => props.height}px;
    width: ${props => props.num*props.width}px;
    margin-bottom: ${props => props.m_bottom}px;
`;

function Carousel() {
    const refDiv = useRef(null);
    const [slideNum, setSlideNum] = useState(1);

    const handeResize = () => {
        const vOut=(window.innerWidth-51*2-10)/430;
        if ((vOut!=slideNum)&&(vOut>1)){
            setSlideNum(parseInt(vOut));
        }
    }

    useEffect(() => {
        handeResize()
    });

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [slideNum]);

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT});

    var settings = {
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
                width={isMobile?(298+30):430}
                height={isMobile?(188+30):255}
                m_bottom={isMobile?80:0}
            >
                <Slider {...settings} className="sliderMain">
                    {arr.map((item,index) =>
                        <Slide 
                            key={index} 
                            icon={item.icon} 
                            desc={item.desc} 
                            alt={item.alt}
                        />
                    )}
                </Slider>
            </Div>
        </>
    );
}
export default Carousel;
