import React from "react";
import styled from "styled-components/macro";

import Slider from "react-slick";
import Slide from "./Slide/Slide";
import ButtonArrow from "../../../../utils/ButtonArrow/ButtonArrow";

import Icon1 from './icon_time.svg';
import Icon2 from './icon_search.svg';
import Icon3 from './icon_lock.svg';

const Container = styled.div`
    width: 1346px;
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
];


function Carousel() {
    return (
        <Container>
            <ButtonArrow rotate={180} />
            <SliderDiv>
                {arr.map((item,index) =>
                    <Slide key={index} icon={item.icon} desc={item.desc} alt={item.alt}></Slide>
                )}
            </SliderDiv>
            <ButtonArrow />
        </Container>
    );
}
export default Carousel;

            // var settings = {
            //     dots: true,
            //     infinite: true,
            //     speed: 500,
            //     slidesToShow: 3,
            //     slidesToScroll: 3
            // };
            {/* <Slider {...settings}>
                <Slide>
                    <h3>1</h3>
                </Slide>
                <Slide>
                    <h3>2</h3>
                </Slide>
                <Slide>
                    <h3>3</h3>
                </Slide>
                <Slide>
                    <h3>4</h3>
                </Slide>
                <Slide>
                    <h3>5</h3>
                </Slide>
                <Slide>
                    <h3>6</h3>
                </Slide>
            </Slider> */}