import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/macro";

import Slider from "react-slick";
// import css from "./Slider.css";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick-styles.css';

import Slide from "./Slide/Slide";
import ButtonArrow from "../../../../utils/ButtonArrow/ButtonArrow";

import Icon1 from './icon_time.svg';
import Icon2 from './icon_search.svg';
import Icon3 from './icon_lock.svg';
import DivFlex from "../../../../utils/DivFlex/DivFlex";

const Container = styled.div`
    /* width: 110px; */
    height: 225px;
    display: flex;
    gap: 4px;
    align-items: center;
`
    const SliderDiv = styled.div`
        width: ${400*3+30*2}px;
        height: 225px;
        display: flex;
        gap: 30px;
    `
    const BtnArrow=styled.button`
        width: 39px;
        height: 39px;
        padding: 0;
        border: none;
        background-color: transparent;
    `
        const ImgRotate=styled.img`
            transform: rotate(180deg);
        `

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
    width: ${props => props.num*430}px;
`

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
    },[]);

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [slideNum]);

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
            >
                <Slider {...settings}>
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
