import React from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import Button from "../../PageMain/custom/Button/Button";
import { mediaMaxWidh } from "../../../utils/consts";

const Div=styled.div`
    width: 641px;
    height: 694px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    padding: 19px 0 35px 30px;
    border-radius: 10px;
    margin-bottom: 38px;
    position: relative;
    @media (max-width: ${mediaMaxWidh}) {
        width: 335px;
        min-width: 335px;
        height: 694px;
        padding: 19px 0 0 24px;
    }
`
    //
        const Date=styled.div`
            height: 19px;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            color: #949494;
            @media (max-width: ${mediaMaxWidh}) {
                min-width: 90px; 
                font-size: 14px;
                line-height: normal;
                letter-spacing: 0.14px;
            }
        `
        const Source=styled.div`
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 0.02em;
            text-decoration-line: underline;
            color: #949494;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 14px;
                line-height: normal;
                letter-spacing: 0.14px;
            }
        `
    const Title=styled.h2`
        font-weight: 500;
        font-size: 26px;
        line-height: 31px;
        letter-spacing: 0.02em;
        color: #000000;
        margin: 24px 0 14px 0;
        @media (max-width: ${mediaMaxWidh}) {
            font-size: 19px;
            line-height: normal;
            letter-spacing: 0.19px;
        }
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
        @media (max-width: ${mediaMaxWidh}) {
            width: 132px;
            height: 20px;
            flex-shrink: 0;
            font-size: 10px;
            line-height: normal;
            letter-spacing: 0.1px;
        }
    `
    const Img=styled.div`
        width: 581px;
        height: 158px;
        border-radius: 10px;
        margin-bottom: 20px;
        background-image: url(${props => props.background});
        background-size: cover;
        @media (max-width: ${mediaMaxWidh}) {
            width: 297px;
            height: 158px;
            flex-shrink: 0;
        }
    `
    const Desc=styled.div`
        width: 581px;
        height: 228px;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #000000;
        opacity: 0.5;
        background-size: auto;
        @media (max-width: ${mediaMaxWidh}) {
            width: 290px;
            font-size: 12px;
            line-height: normal;
            letter-spacing: 0.12px;
        }
    `
    const Words=styled.div`
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;

        color: #949494;
        @media (max-width: ${mediaMaxWidh}) {
            font-size: 14px;
            font-weight: 400;
            line-height: normal;
        }
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

    const isMobile = useMediaQuery({maxWidth: mediaMaxWidh});

    // console.log("isMob",isMobile);
    return (
        <Div>
            <DivFlex
                gap={isMobile?2:14}
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
            {img==""?
                <></>
            :
                <Img
                    background={img} 
                    alt="Amasing"
                ></Img>
            }
            <Desc>
                {desc.slice(0,(isMobile?500:700)*(img==""?(isMobile?2:1.5):1))}
            </Desc>
            <DivFlex 
                position='absolute'
                bottom={35}
                width= {isMobile?(335-24*2):(338+223)}

                render={
                    <>
                        <Button
                            width = {isMobile?195:223}
                            height= {isMobile?40.696:46.54}
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