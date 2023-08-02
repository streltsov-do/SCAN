import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useMediaQuery } from 'react-responsive';

import DivFlex from "../../utils/DivFlex/DivFlex";
import SearchCarousel from "./SearchCarousel/SearchCarousel";
import CardDoc from "./CardDoc/CardDoc";
import { getContent } from "./decoder";
import { mediaMaxWidh } from "../../utils/consts";

import Searching from './Searching.svg';
import Button from "../PageMain/custom/Button/Button";
import sf from "../../../components/utils/img/sf.png"

const p_left=69;

const DivMain=styled.div`
    position: relative;
    padding: ${p_left}px 0 0 60px;
    @media (max-width: ${mediaMaxWidh}) {
        padding: 20px 0 0 12px;
    }
`
const ImgSearching=styled.img`
    position: absolute;
    top: 20px;
    left : ${props => props.left};
    right: ${props => props.right};
    z-index: 1;
    @media (max-width: ${mediaMaxWidh}) {
        position: relative;
        left : 0;
        right: 0;
        width: 350px;
        height: 233.731px;
        margin-bottom: 59.27px;
    }
`
    const Title=styled.h1`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 0.04em;
        color: #000000;
        @media (max-width: ${mediaMaxWidh}) {
            width: 344px;
            font-size: 28px;
            line-height: normal;
            letter-spacing: 0.28px;
        }
    `
    const TitleDesc=styled.h3`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;
        @media (max-width: ${mediaMaxWidh}) {
            font-size: 18px;
            line-height: normal;
            letter-spacing: 0.18px;
            width: 344px;
        }
    `
    const Title2=styled.h2`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.02em;
        color: #000000;
        margin-bottom: ${props => props.m_bottom || 0}px;
        @media (max-width: ${mediaMaxWidh}) {
            font-size: 28px;
            line-height: normal;
            letter-spacing: 0.28px;
            width: 335px;
        }
    `
    const Title2Desc=styled.h4`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: normal;
        letter-spacing: 0.36px;
        margin-bottom: ${props => props.m_bottom || 0}px;
        color: #949494;
        @media (max-width: ${mediaMaxWidh}) {
            letter-spacing: 0.18px;
        }
    `
    const CardGrid=styled.div`
        display: grid;
        grid-template-columns: 641px 641px;
        gap: 20px;
        @media (max-width: ${mediaMaxWidh}) {
            grid-template-columns: 375px;
        }
    `
const dummyPublications = [
    {
        date        : "13.09.2021"                  ,      
        source      : "Комсомольская правда KP.RU"  ,
        title       : "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        img         : sf,
        desc        : `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.${<br></br>}Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
        link        : 0,
        attributes  : {
            "isTechNews"    : true,
            "isAnnouncement": true,
            "isDigest"      : true,
            "influence"     : 352.0,
            "wordCount"     : 1235,
            "coverage"  : {
                "value"     : 1402211.0,
                "state"     : "hasData"
            }
        }
    }
]

function PageResults(props){
    const { logged } = props;
    const [ loading,    setLoading  ] = useState(true);
    const [ isLoading,  setIsLoading] = useState(true);
    const { state, token } = props;
    const [ publications, setPublications ] = 
        useState([])
        // useState(dummyPublications)
        ;
    const [ total, setTotal ] = useState(0);
    const [ showNum, setShowNum ] = useState(0);
    const [ imgOffset, setImgOffset] = useState(["auto","103.44px"]);

    const navigate=useNavigate();

    const isMobile = useMediaQuery({ maxWidth: mediaMaxWidh });

    useEffect(()=> {
        setLoading(state.loading_his || state.loading_obj);
    },[state])

    useEffect(() => {
        if (!logged){
            navigate("/");
            setIsLoading(true);
        } else{
            setIsLoading(false);
        }
        
        if (
            (loading==false)
            &&
            (showNum==0)
            &&
            (total==0)
        ){
            setTotal(state.encodedId.length);
            return fPostDocs();
        }
    },[showNum,total,loading]);
    
    function handeResize(){
        const v_width=window.innerWidth;
        
        let left = (v_width<1210)?"521px":"auto";
        let right = (v_width<1210)?"auto":"103.44px";
        setImgOffset([left,right]);
    }

    useEffect(() => {
        window.addEventListener('resize', handeResize);
        
        return () => {
            window.removeEventListener('resize', handeResize);
        };

    }, [imgOffset]);

    useEffect(() => {
        handeResize();
    }, []);

    function fPostDocs() {
        let maxI=10;
        const len=state.encodedId.length-showNum;
        let last=false;
        if (len<=maxI) {
            maxI=len;
            last=true;
        } 
        const data = {
            ids : state.encodedId.slice(showNum,showNum+maxI)
        }

        fetch("https://gateway.scan-interfax.ru/api/v1/documents", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',

                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{


            if (data.errorCode==undefined){
                let outData=[];
                let outDataFull = publications;
                if (last){
                    setShowNum(-1);
                } else {
                    setShowNum(showNum+10);
                }
                for (var i=0; i<maxI; i++) {
                    outData[i]=data[i].ok;
                    const { bgUrl, content } = getContent(data[i].ok.content.markup, 2000);
                    outData[i].desc=content;
                    outData[i].img=bgUrl;
                    outDataFull.push(outData[i])
                }
                setPublications(outDataFull);
                localStorage.setItem("cards",JSON.stringify(outDataFull));
                return;
            } 
            const set= data.errorCode+"\nMessage: "+data.message;
            throw new Error(set);
        })
        .catch((error) => { 
            console.log("%c PostDocsError: "+error,'background: #222; color: red');
        });
    }

    return(
        (!isLoading)&&
        <DivMain>
            <DivFlex
                direction="column"
                gap={36}
                m_bottom={isMobile?21:127}
                zindex={2}
                position="relative"
                render={
                    <>
                        {
                        loading?
                            <>
                                <Title>Ищем. Скоро<br/>будут результаты</Title>
                                <TitleDesc>Поиск может занять некоторое время,<br/>просим сохранять терпение.</TitleDesc>
                            </>
                        :   
                            <>
                                <Title>Запрос выполнен<br/> </Title>
                                <TitleDesc> <br/> </TitleDesc>
                            </>
                        }
                    </>
                }
            />
            <ImgSearching 
                src={Searching}
                left={imgOffset[0]}
                right={imgOffset[1]}
            ></ImgSearching>
            <DivFlex
                direction="column"
                render={
                    <>
                        <Title2
                            m_bottom={17}
                        >
                            Общая сводка
                        </Title2>
                        <Title2Desc
                            m_bottom={27}
                        >
                            Найдено {total} вариантов
                        </Title2Desc>
                    </>
                }
            />
            <SearchCarousel 
                loading={loading} 
                parent_p_left={p_left}
                state={state}
                m_bottom={isMobile?57:107}
            />
            
            <Title2
                m_bottom={58}
            >
                Список документов
            </Title2>
            <CardGrid>
                {
                    ((publications!=undefined)&&(publications.length>0))
                    ?
                            publications.map((item, index) => 
                                <CardDoc
                                    key             = {index                            }
                                    issueDate       = {item.issueDate.slice(0,10)       }
                                    source          = {item.source.name                 }
                                    title           = {item.title.text                  }
                                    type            = {item.type                        }
                                    img             = {item.img                         }
                                    desc            = {item.desc                        }
                                    url             = {item.url                         }
                                    wordCount       = {item.attributes.wordCount        }
                                    isTechNews      = {item.attributes.isTechNews       }
                                    isAnnouncement  = {item.attributes.isAnnouncement   }
                                    isDigest        = {item.attributes.isDigest         }
                                />
                            )
                    : <>Загрузка...</>
                }
            </CardGrid>
            <DivFlex
                m_bottom={isMobile?57:109}
                justify="center"
                width={isMobile?335:""}
                render={
                    <>  
                        {
                            ((showNum!=-1)&&(((publications!=undefined)&&(publications.length>0))))
                            ?
                                <Button
                                    onClick = {(e) => {
                                        fPostDocs();
                                    }}
                                    disabled= {loading}
                                    name="Показать больше"
                                />
                            : <></>
                        }
                    </>
                }
            />
        </DivMain>
    )
}

export default connect(
    state => ({
        token       : state.rLogin[state.rLogin.length-1].token,
        logged      : state.rLogin[state.rLogin.length-1].logged,
        state       : state.rSearch[state.rSearch.length-1],
    }),
)
(PageResults)