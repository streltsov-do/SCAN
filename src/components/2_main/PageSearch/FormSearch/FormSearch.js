import React from "react";
import styled from "styled-components/macro";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useRef, useEffect } from "react";

import DivFlex from "../../../utils/DivFlex/DivFlex";
import Button from "../../PageMain/custom/Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import DropDown from "./DropDown/DrowDown";
import Asterisk from "./Asterisk/Asterisk";
import ArrowDown from "./ArrowDown/ArrowDown";

const Form=styled.form`
    width: 872px;
    height: 543px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 29px 0 0 44px;
    display: flex;
    gap: 11px;
    position: relative;
`
    const DivFlex1=styled.div`
        display: flex;
        flex-direction: ${props => props.row?"row":"column"};
        gap: ${props => props.gap || 30}px;
    `
        const InputDesc=styled.div`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.03em;
            margin-bottom: 20px;
            margin-top: ${props=>props.m_top}px;
        `
        const Input=styled.input`
            width: ${props => props.width || 242}px;
            height: 43px;
            background: #FFFFFF;
            border: 1px solid #C7C7C7;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            padding-left: 22px;
            padding-right: 22px;
            
            text-align: ${props => props.align || "center"};
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.03em;
            /* color: rgba(148, 148, 148); */
            color: black;
        `
        const Input1=styled.div`
            font-size: 25px;
            line-height: 30px;
            letter-spacing: 0.03em;
            position: absolute;
            top: -1px;
            left: -1px;
        `

const DivGray=styled.div`
    letter-spacing: 0.03em;
    color: #949494;
`


function FormSearch(){
    
    const [tone     , setTone       ] = useState(2  );

    const [inn      , setInn        ] = useState(1234567891 );
    const [docs     , setDocs       ] = useState(12 );
    const [dateStart, setDateStart  ] = useState("2018-07-22");
    const [dateEnd  , setDateEnd    ] = useState("2019-07-22");

    // const [inn      , setInn        ] = useState(undefined);
    // const [docs     , setDocs       ] = useState(undefined);
    // const [dateStart, setDateStart  ] = useState(undefined);
    // const [dateEnd  , setDateEnd    ] = useState(undefined);

    const [chkMax   , setChkMax     ] = useState(true);
    const [chkEnd   , setChkEnd     ] = useState(true);
    const [chkMain  , setChkMain    ] = useState(true);
    const [chkRisc  , setChkRisc    ] = useState(false);
    const [chkTech  , setChkTech    ] = useState(false);
    const [chkAd    , setChkAd      ] = useState(true);
    const [chkSumm  , setChkSumm    ] = useState(false);

    const refInn    = useRef(null);
    const refDocs   = useRef(null);
    
    const arr=[
        {
            desc: "Признак максимальной полноты",
            defaultChecked: chkMax,
            enabled: "true"
        },
        {
            desc:"Упоминания в бизнес-контексте",
            defaultChecked: chkEnd,
            enabled: "true"
        },
        {
            desc:"Главная роль в публикации",
            defaultChecked: chkMain,
            enabled: "true"
        },
        {
            desc:"Публикации только с риск-факторами",
            defaultChecked: chkRisc,
            enabled: "false"
        },
        {
            desc:"Включать технические новости рынков",
            defaultChecked: chkTech,
            enabled: "false"
        },
        {
            desc:"Включать анонсы и календари",
            defaultChecked: chkAd,
            enabled: "true"
        },
        {
            desc:"Включать сводки новостей",
            defaultChecked: chkSumm,
            enabled: "false"
        },
    ]


    function handleCheck(idx){
        switch (idx){
            case 0: setChkMax (!chkMax ); break;
            case 1: setChkEnd (!chkEnd ); break;
            case 2: setChkMain(!chkMain); break;
            case 3: setChkRisc(!chkRisc); break;
            case 4: setChkTech(!chkTech); break;
            case 5: setChkAd  (!chkAd  ); break;
            case 6: setChkSumm(!chkSumm); break;
            default: 
                break;
        }
    }

    const limitInn = (val) => {
        if (val.length>10){
            val=val.slice(0,10);
            refInn.current.value=val;
        }
        setInn(val);
    }
    const limitDocs = (val) => {
        let change=false;
        if (val>1000){
            val=1000;
            change=true;
        } else if (val<1) {
            val=1;
            change=true;
        }
        if (change) {
            refDocs.current.value=val;
        }
        setDocs(val);
    }

    function handleSearh(e){
        e.preventDefault();
        let allgood=true;
        const DateInterval= {
            "startDate": "2019-01-01T00:00:00+03:00",
            "endDate": "2022-08-31T23:59:59+03:00"
        }
        const searchContext = {
            "targetSearchEntitiesContext": {
              "targetSearchEntities": [
                {
                  "type": "company",
                  "sparkId": null,
                  "entityId": null,
                  "inn": 7710137066,
                  "maxFullness": true,
                  "inBusinessNews": null
                }
              ],
              "onlyMainRole": true,
              "tonality": "any",
              "onlyWithRiskFactors": false,
              "riskFactors": {
                "and": [],
                "or": [],
                "not": []
              },
              "themes": {
                "and": [],
                "or": [],
                "not": []
              }
            },
            "themesFilter": {
              "and": [],
              "or": [],
              "not": []
            }
          };
          const searchArea = {
            "includedSources": [],
            "excludedSources": [],
            "includedSourceGroups": [],
            "excludedSourceGroups": []
          };
          const  attributeFilters = {
            "excludeTechNews": true,
            "excludeAnnouncements": true,
            "excludeDigests": true
          };
        
        const data={
            intervalType        : "month",
            histogramTypes      : ["totalDocuments","riskFactors "],
            issueDateInterval   : DateInterval,   // Search.DateInterval 
            searchContext       : searchContext,   // Search.SearchContext
            similarMode         : "duplicates", // none / duplicates
            limit               : 1,            // 1-1000
            sortType            : "sourceInfluence",   // issueDate / sourceInfluence  
            sortDirectionType   : "desc ",  // desc / asc 
            attributeFilters    : attributeFilters,       // Filter.Attributes
            searchArea          : searchArea,
        }
        if (allgood){

            // Navigate('/results')
        }
    }

    return(
        <Form>
            <DivFlex
                gap={30}
                direction="column"
                render={
                    <>
                        <div>
                            <DivFlex 
                                position='relative'
                                render={
                                    <>
                                        <InputDesc>ИНН компании</InputDesc>
                                        <Asterisk/>
                                    </> 
                                }
                            />
                            <Input 
                                type="number" 
                                placeholder="10 цифр" 
                                onChange={(e) => limitInn(e.target.value)}
                                ref={refInn}
                                defaultValue={inn}
                            ></Input>
                            
                        </div>

                        <div>
                            <InputDesc>Тональность</InputDesc>
                            
                            <DropDown
                                align="start"
                                tone={tone}
                                setTone={setTone}
                            />
                        </div>
                        
                        <div>
                            <DivFlex 
                                position='relative'
                                render={
                                    <>
                                        <InputDesc>Количество документов в выдаче</InputDesc>
                                        <Asterisk/>
                                    </> 
                                }
                            />
                            <Input 
                                type="number" 
                                placeholder="От 1 до 1000"
                                ref={refDocs}
                                onChange={(e)=>limitDocs(e.target.value)}
                                defaultValue={docs}
                            ></Input>
                        </div>
                        
                        <div>
                            <DivFlex
                                position='relative'
                                render={
                                    <>
                                        <InputDesc m_top={9}>Диапазон поиска</InputDesc>
                                        <Asterisk top={-1}/>
                                    </>
                                }
                            />
                            <DivFlex gap={20} direction="row"
                                render={
                                    <>
                                        {/* <DivFlex
                                            position="relative"
                                            render={
                                                <> */}
                                                    <Input 
                                                        type="date" 
                                                        width={176} 
                                                        placeholder="Дата начала" 
                                                        align="start"
                                                        defaultValue={dateStart}                                                        
                                                        onChange={(e) => {setDateStart(e.target.value)}}
                                                    ></Input>
                                                    
                                                    {/* <ArrowDown 
                                                        rotate={
                                                            (false.toString())
                                                        }
                                                    /> */}
                                                {/* </>
                                            }
                                        /> */}
                                        <Input 
                                            type="date" 
                                            width={176} 
                                            placeholder="Дата конца"  
                                            align="start"
                                            defaultValue={dateEnd}
                                            onChange={(e) => {setDateEnd(e.target.value)}}
                                        ></Input>
                                    </>
                                }
                            />
                        </div>
                    </>
                }
            />
            <DivFlex
                direction="column"
                gap={17}
                m_top={9}
                position="relative"
                render={
                    <>
                        {
                            (arr.map((item,index) => 
                                <Checkbox 
                                    key={index}
                                    name={item.desc}
                                    defaultChecked={item.defaultChecked}
                                    enabled={item.enabled}
                                    change={(e) => {handleCheck(index)}}
                                />
                            ))
                        }
                    </>
                }
            />                                
                                
            <DivFlex
                direction="column"
                position="absolute"
                top={425}
                right={39}
                render={
                    <>
                        {/* <Link to="/results"
                        > */}
                            <Button 
                                name="Поиск" 
                                width={305} 
                                align= "flex-end"
                                m_bottom={10}
                                type="submit"
                                onClick={handleSearh}
                            />
                        {/* </Link> */}
                        <DivGray>* Обязательные к заполнению поля</DivGray>
                    </>
                }
            />
        </Form>
    )
}

// export default FormSearch();
export default connect(
    state => ({
        token  : state.rLogin[state.rLogin.length-1].token,
    })
    // dispatch => ({
        
    // })
)
(FormSearch)