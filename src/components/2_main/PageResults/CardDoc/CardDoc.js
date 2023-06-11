import React from "react";
import styled from "styled-components/macro";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import Button from "../../PageMain/custom/Button/Button";

const Div=styled.div`
    width: 641px;
    height: 694px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 19px 0 35px 30px;
    border-radius: 10px;
    margin-bottom: 38px;
    /* display: flex;
    flex-direction: column; */
    position: relative;
`
    //
        const Date=styled.div`
            width: 88px;
            height: 19px;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #949494;
        `
        const Source=styled.div`
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            text-decoration-line: underline;
            color: #949494;
        `
    const Title=styled.h2`
        font-weight: 500;
        font-size: 26px;
        line-height: 31px;
        letter-spacing: 0.02em;
        color: #000000;
        margin: 24px 0 14px 0;
    `
    const Type=styled.div`
        width: 157px;
        height: 22px;
        background: #FFB64F;
        border-radius: 5px;
        margin-bottom: 14px;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.02em;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const Img=styled.img`
        width: 581px;
        height: 158px;
        border-radius: 10px;
        margin-bottom: 20px;
    `
    const Desc=styled.div`
        width: 581px;
        height: 228px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #000000;
        opacity: 0.5;
    `
    const Words=styled.div`
        position: absolute;
        /* right: 28px; */
        bottom: 0;
        right: 0;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;

        color: #949494;
    `


export default function CardDoc(props) {
    const {
            date, 
            source, 
            title, 
            type, 
            img, 
            desc, 
            link, 
            words
        } = props;

    return (
        <Div>
            <DivFlex
                gap={14}
                render={
                    <>
                        <Date>{date}</Date>
                        <Source>{source}</Source>
                    </>
                }
            />
            <Title>{title}</Title>
            <Type>{type}</Type>
            <Img src={img} alt="Amasing"></Img>
            <Desc>
                {desc}
            </Desc>
            <DivFlex 
                position='absolute'
                // justify_s="end"
                // align_s="flex-end"
                bottom={35}
                width= {338+223}

                render={
                    <>
                        <Button
                            width = {223}
                            height= {46.54}
                            background ="7CE3E1"
                            color="000000"
                            name="Читать в источнике"
                            f_size={16}
                            f_height={19}
                        />
                        <Words>{words} слова</Words>
                    </>
                }
            />
        </Div>
    )
}