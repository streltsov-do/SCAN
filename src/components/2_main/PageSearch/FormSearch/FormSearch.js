import React from "react";
import styled from "styled-components/macro";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useRef } from "react";
import { useMediaQuery } from 'react-responsive';

import DivFlex from "../../../utils/DivFlex/DivFlex";
import Button from "../../PageMain/custom/Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import DropDown from "./DropDown/DrowDown";
import Asterisk from "./Asterisk/Asterisk";
import { mediaMaxWidh } from "../../../utils/consts";

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
    @media (max-width: ${mediaMaxWidh}) {
        width: 375px;
        height: 688px;
        padding: 32px 0 0 14px;
        margin-bottom: 24px;
        box-sizing: border-box;
    }
`
        const InputDesc=styled.div`
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 22px;
            letter-spacing: 0.03em;
            margin-bottom: 20px;
            margin-top: ${props=>props.m_top || 0}px;
            z-index: 0;
            @media (max-width: ${mediaMaxWidh}) {
                font-size: 18px;
                line-height: normal;
                letter-spacing: 0.36px;
            }
        `
        const Input=styled.input`
            width: ${props => props.width || 242}px;
            height: 43px;
            background: #FFFFFF;
            border: 1px solid ${(props => ((!props.$valid)?"#FF5959":"#C7C7C7")) || "#FF0203" };
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            padding-left: 22px;
            padding-right: 22px;
            
            text-align: ${props => props.align || "center"};
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.03em;
            color: ${props => (!props.$valid)?"#FF5959":"black"};
            @media (max-width: ${mediaMaxWidh}) {
                width: 335px;
                height: 43px;

                /* color: #949494; */
                font-size: 14px;
                line-height: normal;
                letter-spacing: 0.28px;
            }
        `
        const InputErr=styled.div`
            height: 17px;
            width: 242px;
            text-align: center;
            position: absolute;
            bottom: ${-17-2}px;
            color: #FF5959;
            font-size: 14px;
            letter-spacing: 0.14px;
        `

const DivGray=styled.div`
    letter-spacing: 0.03em;
    color: #949494;
`


function FormSearch(props){
    
    const { token, set_histograms, set_objects, set_loading } = props;

    const [inn      , setInn        ] = useState(7710137066 );
    const [docs     , setDocs       ] = useState(12 );
    const [dateStart, setDateStart  ] = useState("2022-07-22");
    const [dateEnd  , setDateEnd    ] = useState("2023-07-22");

    // const [inn      , setInn        ] = useState("");
    // const [docs     , setDocs       ] = useState("");
    // const [dateStart, setDateStart  ] = useState("");
    // const [dateEnd  , setDateEnd    ] = useState("");

    const [chkNecessary, setChkNecessary] = useState({
        inn:  0,
        docs: 0,
        date: 0,
    })

    const [tone     , setTone       ] = useState(2);

    const [chkFiltMax   , setChkFiltMax     ] = useState(true);
    const [chkFiltEnd   , setChkFiltBuis    ] = useState(true);
    const [chkFiltMain  , setChkFiltMain    ] = useState(true);
    const [chkFiltRisc  , setChkFiltRisc    ] = useState(false);
    const [chkFiltTech  , setChkFiltTech    ] = useState(false);
    const [chkFiltAd    , setChkFiltAd      ] = useState(true);
    const [chkFiltSumm  , setChkFiltSumm    ] = useState(false);

    const refInn    = useRef(null);
    const refDocs   = useRef(null);

    const navigate=useNavigate();

    const isMobile = useMediaQuery({maxWidth: mediaMaxWidh});
    
    const arr=[
        {
            desc: "Признак максимальной полноты",
            defaultChecked: chkFiltMax,
            enabled: "true"
        },
        {
            desc:"Упоминания в бизнес-контексте",
            defaultChecked: chkFiltEnd,
            enabled: "true"
        },
        {
            desc:"Главная роль в публикации",
            defaultChecked: chkFiltMain,
            enabled: "true"
        },
        {
            desc:"Публикации только с риск-факторами",
            defaultChecked: chkFiltRisc,
            enabled: "false"
        },
        {
            desc:"Включать технические новости рынков",
            defaultChecked: chkFiltTech,
            enabled: "false"
        },
        {
            desc:"Включать анонсы и календари",
            defaultChecked: chkFiltAd,
            enabled: "true"
        },
        {
            desc:"Включать сводки новостей",
            defaultChecked: chkFiltSumm,
            enabled: "false"
        },
    ]


    function handleCheck(idx){
        switch (idx){
            case 0: setChkFiltMax (!chkFiltMax ); break;
            case 1: setChkFiltBuis(!chkFiltEnd ); break;
            case 2: setChkFiltMain(!chkFiltMain); break;
            case 3: setChkFiltRisc(!chkFiltRisc); break;
            case 4: setChkFiltTech(!chkFiltTech); break;
            case 5: setChkFiltAd  (!chkFiltAd  ); break;
            case 6: setChkFiltSumm(!chkFiltSumm); break;
            default: 
                break;
        }
    }

    const limitInn = (val) => {
        
        setChkNecessary({
            inn: 0,
            docs: chkNecessary.docs,
            date: chkNecessary.date,
        });

        if (val.length>10){
            val=val.slice(0,10);
            refInn.current.value=val;
        }
        setInn(val);
    }
    const limitDocs = (val) => {
        
        setChkNecessary({
            inn : chkNecessary.inn,
            docs: 0,
            date: chkNecessary.date,
        });

        if (val>1000){
            val=1000;
        } else if ((val<1)&&(val!="")) {
            val=1;
        }
        setDocs(val);
    }

    function chkInn(val) {
        let arr = ('' + val).split('');
        arr=arr.map(Number);

        if (arr.length==0){
            setChkNecessary({
                inn: -2,
                docs: chkNecessary.docs,
                date: chkNecessary.date,
            });
            return -2;
        }
        if (arr.length!=10){
            setChkNecessary({
                inn: -1,
                docs: chkNecessary.docs,
                date: chkNecessary.date,
            });
            return -1;
        }
        const coefs=[2, 4, 10, 3, 5, 9, 4, 6, 8];

        let v_out=0;
        for (var i=0; i<9; i++){
            v_out+=arr[i]*coefs[i];
        }
        v_out= v_out%11;
        if (v_out==arr[9]) {
            return 1;
        }
        return -1;
    }

    function chkDate(start,end){
        if (    (start>end)
            ||  (start==undefined)
            ||  (end==undefined)
            ||  (start=="")
            ||  (end=="")
        ) {
            return -1;
        }
        return 1;
    }
    
    function fPostSearch(op,token,data) {
        const adr=(op=="histograms")?"objectsearch/histograms":"objectsearch"
        fetch("https://gateway.scan-interfax.ru/api/v1/"+adr, {
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
            // console.log(op+" data",data);

            if (op=="histograms") {
                // console.log(op+" data[0]",data.data[0]);
                // console.log(op+" data[1]",data.data[1]);
                
                const outData = [];

                for (var i=0; i<data.data[0].data.length; i++){
                    const obj= {
                        docs : data.data[0].data[i].value,
                        date : data.data[0].data[i].date.slice(0,10),
                        risk : data.data[1].data[i].value,
                    }
                    outData.push(obj);
                }
                // console.log(op+" outData",outData);
                localStorage.setItem("searchHistograms",JSON.stringify(outData));

                set_histograms(outData);
            } else {
                
                const outData = {
                    encodedId   : [],
                    influence   : [],
                    similarCount: [],
                }

                for (var i=0; i<data.items.length; i++){
                    outData.encodedId   [i] = data.items[i].encodedId   ;
                    outData.influence   [i] = data.items[i].influence   ;
                    outData.similarCount[i] = data.items[i].similarCount;
                }
                // console.log(op+" outData",outData);
            
                localStorage.setItem("searchObjects",JSON.stringify(outData));

                set_objects(outData);
            }
        })
        .catch(() => { 
            console.log(op+" error");
            return false;
        });
    }

    function getData () {
        const DateInterval= {
            "startDate": dateStart+"T00:00:00+03:00",
            "endDate": dateEnd+"T23:59:59+03:00"
        }
        const searchContext = {
            "targetSearchEntitiesContext": {
            "targetSearchEntities": 
                [
                    {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": inn,
                        "maxFullness": (!isMobile)&&chkFiltMax,
                        "inBusinessNews": (!isMobile)&&chkFiltEnd
                    }
                ],
                "onlyMainRole": (!isMobile)&&chkFiltMain,
                "tonality": (tone==2)?"any":((tone==1)?"negative":"positive"),
                "onlyWithRiskFactors": (!isMobile)&&chkFiltRisc,
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
            "excludeTechNews":      !((!isMobile)&&chkFiltTech),
            "excludeAnnouncements": !((!isMobile)&&chkFiltAd  ),
            "excludeDigests":       !((!isMobile)&&chkFiltSumm)
        };
        
        const data={
            intervalType        : "month",
            histogramTypes      : ["totalDocuments","riskFactors"],
            issueDateInterval   : DateInterval,   // Search.DateInterval 
            searchContext       : searchContext,   // Search.SearchContext
            similarMode         : "duplicates", // none / duplicates
            limit               : docs,            // 1-1000
            sortType            : "sourceInfluence",   // issueDate / sourceInfluence  
            sortDirectionType   : "desc ",  // desc / asc 
            attributeFilters    : attributeFilters,       // Filter.Attributes
            searchArea          : searchArea,
        }
        // console.log("data",data);
        return data;
    }
    function handleSearh(e){
        e.preventDefault();
        let stateNecessary = {
            inn : 1,
            docs: 1,
            date: 1,
        };

        stateNecessary.inn=chkInn(inn);
        
        if ((docs=="")||(docs==-1)||(docs==undefined)){
            stateNecessary.docs=-1;
        }        

        stateNecessary.date=chkDate(dateStart,dateEnd);

        setChkNecessary(stateNecessary);
        if ((stateNecessary.inn!=1)||(stateNecessary.docs!=1)||(stateNecessary.date!=1)){
            return;
        } else {
            const data = getData();
            set_loading();
            fPostSearch("histograms"    , token, data);
            fPostSearch("objectsearch"  , token, data);
            
            navigate('/results');
        }

        return;
    }

    return(
        <Form>
            <DivFlex
                gap={30}
                direction="column"
                width={isMobile?(375-14):""}
                render={
                    <>
                        <div>
                            <DivFlex 
                                position='relative'
                                render={
                                    <>
                                        <InputDesc>ИНН компании</InputDesc>
                                        <Asterisk
                                            good={(chkNecessary.inn>-1)}
                                        />
                                    </> 
                                }
                            />
                            <DivFlex
                                position="relative"
                                direction="column"
                                render={
                                    <>
                                        <Input 
                                            type="number" 
                                            placeholder="10 цифр" 
                                            onChange={(e) => limitInn(e.target.value)}
                                            ref={refInn}
                                            defaultValue={inn}
                                            $valid={(chkNecessary.inn>-1)}
                                        ></Input>
                                        <InputErr>
                                            {   
                                                ((chkNecessary.inn==-1)||(chkNecessary.inn==-2))
                                                ?
                                                    (chkNecessary.inn==-1)
                                                    ? "Введите корректные данные"
                                                    : "Обязательное поле"
                                                : ""
                                            }
                                        </InputErr>
                                    </>
                                }
                            />
                            
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
                                        <Asterisk
                                            good={!(chkNecessary.docs==-1)}
                                        />
                                    </> 
                                }
                            />
                            
                            <DivFlex
                                position="relative"
                                direction="column"
                                render={
                                    <>
                                        <Input 
                                            type="number" 
                                            placeholder="От 1 до 1000"
                                            ref={refDocs}
                                            onChange={(e)=>{
                                                limitDocs(e.target.value)
                                            }}
                                            defaultValue={docs}
                                            $valid={!(chkNecessary.docs==-1)}
                                        ></Input>
                                        <InputErr>
                                            {   
                                                (chkNecessary.docs==-1)
                                                ? "Обязательное поле"
                                                : ""
                                            }
                                        </InputErr>
                                    </>
                                }
                            />
                        </div>
                        
                        <DivFlex
                            position="relative"
                            direction="column"
                            render={
                                <>
                                    <DivFlex
                                        position='relative'
                                        render={
                                            <>
                                                <InputDesc m_top={9}>Диапазон поиска</InputDesc>
                                                <Asterisk
                                                    top={-1}
                                                    good={chkNecessary.date!=-1}
                                                />
                                            </>
                                        }
                                    />
                                    <DivFlex 
                                        gap={20} 
                                        direction={isMobile?"column":"row"}
                                        position="relative"
                                        render={
                                            <>
                                                <DivFlex
                                                    position="relative"
                                                    render={
                                                        <>
                                                            <Input 
                                                                type="date"
                                                                width={176} 
                                                                align="start"
                                                                defaultValue={dateStart}   
                                                                $valid={chkNecessary.date!=-1}
                                                                onChange={(e) => {
                                                                    setChkNecessary({
                                                                        inn : chkNecessary.inn,
                                                                        docs: chkNecessary.docs,
                                                                        date: 0,
                                                                    });
                                                                    setDateStart(e.target.value);
                                                                }}
                                                            ></Input>
                                                                
                                                            <DivFlex
                                                                position="absolute"
                                                                top="13"
                                                                left={isMobile?124:44}
                                                                render="Дата начала"
                                                                color= "#949494"
                                                                opacity= "0.4000000059604645"
                                                                letter_spacing="0.42px"
                                                                display={
                                                                    ((dateStart=="")||(dateStart==undefined))?"flex":"none"
                                                                }
                                                            />
                                                        </>
                                                    }
                                                />
                                                <DivFlex
                                                    position="relative"
                                                    render={
                                                        <>
                                                            <Input 
                                                                type="date" 
                                                                width={176} 
                                                                align="start"
                                                                defaultValue={dateEnd}
                                                                $valid={chkNecessary.date!=-1}
                                                                onChange={(e) => {
                                                                    setChkNecessary({
                                                                        inn : chkNecessary.inn,
                                                                        docs: chkNecessary.docs,
                                                                        date: 0,
                                                                    });
                                                                    setDateEnd(e.target.value);
                                                                }}
                                                            ></Input>
                                                            <DivFlex
                                                                position="absolute"
                                                                top="13"
                                                                left={isMobile?128:44}
                                                                render="Дата конца"
                                                                color= "#949494"
                                                                opacity= "0.4000000059604645"
                                                                letter_spacing="0.42px"
                                                                display={
                                                                    ((dateEnd=="")||(dateEnd==undefined))?"flex":"none"
                                                                }
                                                            />
                                                        </>
                                                    }
                                                />
                                            </>
                                        }
                                    />
                                    
                                    <DivFlex
                                        justify="center"
                                        render={
                                            <InputErr>
                                                {   
                                                    (chkNecessary.date==-1)
                                                    ? "Введите корректные данные"
                                                    : ""
                                                }
                                            </InputErr>
                                        }
                                    />
                                </>
                            }
                        />
                    </>
                }
            />
            <DivFlex
                direction="column"
                gap={17}
                m_top={9}
                position="relative"
                display={isMobile?"none":"flex"}
                width={isMobile?(375-14):""}
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
                bottom  ={isMobile?37:32}
                right   ={isMobile?26:39}
                render={
                    <>
                        <Button 
                            name="Поиск" 
                            width={isMobile?335:305} 
                            align= "flex-end"
                            m_bottom={10}
                            type="submit"
                            onClick={handleSearh}
                        />
                        <DivGray>* Обязательные к заполнению поля</DivGray>
                    </>
                }
            />
        </Form>
    )
}

export default connect(
    state => ({
        token  : state.rLogin[state.rLogin.length-1].token,
    }),
    dispatch => ({
        set_histograms : (data) => {
            dispatch({
                type: "SET_HISTOGRAMS",
                cards: data,
            });
        },
        set_objects : (data) => {
            dispatch({
                type: "SET_OBJECTS",
                encodedId   : data.encodedId   ,
                influence   : data.influence   ,
                similarCount: data.similarCount,
            });
        },
        set_loading : (data) => {
            dispatch({
                type: "SET_LOADING",
            });
        },
    })
)
(FormSearch)