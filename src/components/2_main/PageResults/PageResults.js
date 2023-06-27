import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";

import DivFlex from "../../utils/DivFlex/DivFlex";
import SeacrchCarousel from "./SearchCarousel/SearchCarousel";
import CardDoc from "./CardDoc/CardDoc";

import Searching from './Searching.svg';
import Button from "../PageMain/custom/Button/Button";
import sf from "../../../components/utils/img/sf.png"

const p_left=69;

const DivMain=styled.div`
    position: relative;
    padding: ${p_left}px 0 0 60px;
`
const ImgSearching=styled.img`
    position: absolute;
    top: 20px;
    right: 103.44px;
    z-index: 1;
`
    const Title=styled.h1`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 0.04em;

        color: #000000;
    `
    const TitleDesc=styled.h3`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.02em;
    `
    const Title2=styled.h2`
        font-family: 'Ferry';
        font-style: normal;
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 0.02em;
        color: #000000;
    `
    const Title2Desc=styled.h4`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.02em;
        color: #949494;
    `
    const CardGrid=styled.div`
        display: grid;
        grid-template-columns: 641px 641px;
        gap: 20px;
    `

const arr=[
    {
        date    : "13.09.2021"           ,      
        source  : "Комсомольская правда KP.RU"  ,
        title   : "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        type    : "Технические новости",
        img     : 0,
        desc    : `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.${<br></br>}Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
        link    : 0,
        words   : 1235
    }
]

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

    const { state, token } = props;
    const [publications, setPublications ] = 
        useState()
        // useState(dummyPublications)
        ;
    const [ showNum, setShowNum ] = useState(0);

    let loading = state.loading_his && state.loading_obj;

    if ((loading==false)&&(showNum==0)){
        console.log("ALO_func");
        
        // fPostDocs()
    }

    useEffect( () => {
        if (loading==false){
            console.log("ALO_effect")

            // fPostDocs(token, alo);
        }
    });
    
    function fPostDocs() {
        const data = {
            ids : state.encodedId.slice(showNum,showNum+10)
        }
        console.log("alllll",data.ids.length);

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
            // console.log(response);
            //  if (response.ok) {
                return response.json();
            // }
            // throw new Error(response.statusText);
        })
        .then((data)=>{
            if (data.errorCode==undefined){
                let outData=[];
                const maxI=10;
                if (data.length<=(showNum+10)) {
                    maxI=data.length-showNum-1;
                    setShowNum(-1);
                } else {
                    setShowNum(showNum+10);
                }
                for (var i=0; i<maxI; i++) {
                    outData[i]=data[i].ok;
                    // console.log("outData[i]=",outData[i]);
                }
                // console.log("outData",outData);
                setPublications(outData);
                localStorage.setItem("cards",JSON.stringify(outData));
                return;
            } 
            const set= data.errorCode+"\nMessage: "+data.message;
            throw new Error(set);
        })
        .catch((error) => { 
            console.log("%c"+error,'background: #222; color: red');
        });
    }

    return(
        <DivMain>
            <DivFlex
                direction="column"
                gap={36}
                m_bottom={127}
                zindex={2}
                position="relative"
                render={
                    <>
                        <Title>Ищем. Скоро<br/>будут результаты</Title>
                        <TitleDesc>Поиск может занять некоторое время,<br/>просим сохранять терпение.</TitleDesc>
                    </>
                }
            />
            <DivFlex
                direction="column"
                gap={17}
                m_bottom={27}
                render={
                    <>
                        <Title2>Общая сводка</Title2>
                        <Title2Desc>Найдено 4 221 вариантов</Title2Desc>
                        
                        <Title2>Список документов</Title2>
                    </>
                }
            />
            <ImgSearching src={Searching}></ImgSearching>
            <SeacrchCarousel 
                loading={loading} 
                parent_p_left={p_left}
                state={state}
            />
            
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
                                    desc            = {item.content.markup              }
                                    url             = {item.url                         }
                                    wordCount       = {item.attributes.wordCount        }
                                    isTechNews      = {item.attributes.isTechNews       }
                                    isAnnouncement  = {item.attributes.isAnnouncement   }
                                    isDigest        = {item.attributes.isDigest         }
                                />
                            )
                    : <>Nealo</>
                }
            </CardGrid>
            <DivFlex
                m_bottom="109"
                justify="center"
                render={
                    <>  
                        {
                            (showNum!=-1)
                            ?
                                <Button
                                    onClick = {(e) => {
                                        const alo = {
                                            ids : state.encodedId.slice(0,10)
                                        }
                                        fPostDocs();
                                    }}
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
        // token       : getState(rLogin.token),
        state       : state.rSearch[state.rSearch.length-1],
    }),
    // dispatch => {
    //     add => 
    // }
)
(PageResults)