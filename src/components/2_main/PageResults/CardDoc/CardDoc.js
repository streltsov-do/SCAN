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
    position: relative;
`
    //
        const Date=styled.div`
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
        padding: 0 11px 0 14px;
        height: 22px;
        background: ${props => props.bg};
        border-radius: 5px;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.02em;
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const Img=styled.div`
        width: 581px;
        height: 158px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-image: url(${props => props.background});
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
        bottom: 0;
        right: 0;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;

        color: #949494;
    `


export default function CardDoc(props) {
    const {
            issueDate, 
            source, 
            title, 
            img, 
            desc, 
            url, 
            wordCount       ,
            isTechNews      ,
            isAnnouncement  ,
            isDigest        ,
        } = props;

    return (
        <Div>
            <DivFlex
                gap={14}
                render={
                    <>
                        <Date>{issueDate}</Date>
                        <Source>{source}</Source>
                    </>
                }
            />
            <Title>{title}</Title>
            <DivFlex
                gap={10}
                m_bottom= {14}
                height={22}
                render={
                    <>
                        {isTechNews     ?<Type bg="#FFB64F">Технические новости</Type>:<></>}
                        {isAnnouncement ?<Type bg="#11B64F">Анонс</Type>:<></>}
                        {isDigest       ?<Type bg="#FF004F">Дайджест</Type>:<></>}
                    </>
                }
            />
            <Img    
                background={img} 
                alt="Amasing"
            ></Img>
            <Desc>
                {desc}
            </Desc>
            <DivFlex 
                position='absolute'
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
                            onClick={(e)=>( window.open(url, '_blank'))}
                        />
                        <Words>{wordCount} слова</Words>
                    </>
                }
            />
        </Div>
    )
}