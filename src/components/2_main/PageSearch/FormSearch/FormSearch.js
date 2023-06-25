import React from "react";
import styled from "styled-components/macro";
import { Link, useNavigate } from "react-router-dom";
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
            border: 1px solid ${(props => ((!props.$valid)?"#FF5959":"#C7C7C7")) || "#FF0203" };
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
            border-radius: 5px;
            padding-left: 22px;
            padding-right: 22px;
            
            text-align: ${props => props.align || "center"};
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.03em;
            /* color: rgba(148, 148, 148); */
            color: ${props => (!props.$valid)?"#FF5959":"black"};
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
    
    const { token, get_histograms, get_objects, loading_set } = props;


    const [inn      , setInn        ] = useState(7710137066 );
    const [tone     , setTone       ] = useState(2  );
    const [docs     , setDocs       ] = useState(12 );
    const [dateStart, setDateStart  ] = useState("2022-07-22");
    const [dateEnd  , setDateEnd    ] = useState("2023-07-22");
    const [dateGood , setDateGood   ] = useState(true);

    // const [inn      , setInn        ] = useState(undefined);
    // const [docs     , setDocs       ] = useState(undefined);
    // const [dateStart, setDateStart  ] = useState(undefined);
    // const [dateEnd  , setDateEnd    ] = useState(undefined);

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
        if (val.length>10){
            val=val.slice(0,10);
            refInn.current.value=val;
        }
        // if (val.length==10){
        //     setInn(val);
        // }
        // setInn(0);
        setInn(val);
    }
    const limitDocs = (val) => {
        let change=false;
        if (val>1000){
            val=1000;
            change=true;
        } else if ((val<1)&&(val!="")) {
            val=1;
            change=true;
        }
        if (change) {
            refDocs.current.value=val;
        }
        setDocs(val);
    }

    function chkInn(val) {
        let arr = ('' + val).split('');
        arr=arr.map(Number);

        if (arr.length==0){
            setInn(-2);
            return false;
        }
        if (arr.length!=10){
            setInn(-1);
            return false;
        }
        const coefs=[2, 4, 10, 3, 5, 9, 4, 6, 8];

        let v_out=0;
        for (var i=0; i<9; i++){
            v_out+=arr[i]*coefs[i];
        }
        v_out= v_out%11;
        if (v_out==arr[9]) {
            return true;
        }
        setInn(-1);
        return false;
    }

    function chkDate(start,end){
        // console.log("start="+start);
        // console.log("end="+end);
        if (start>end) {
            setDateGood(false);
            return false;
        }
        return true;
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
            console.log(op+" response",response);
            return response.json();
        })
        .then((data)=>{
            console.log(op+" data",data);

            if (op=="histograms") {
                console.log(op+" data[0]",data.data[0]);
                console.log(op+" data[1]",data.data[1]);
                
                const outData = {
                    docs: [],
                    date: [],
                    risk: [],
                }

                console.log("data.data[0].data.length",data.data[0].data.length);
                for (var i=0; i<data.data[0].data.length; i++){
                    outData.docs[i] = data.data[0].data[i].value;
                    outData.date[i] = data.data[0].data[i].date.slice(0,10);
                    outData.risk[i] = data.data[1].data[i].value;
                }
                console.log(op+" outData",outData);

                get_histograms(outData);
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

                get_objects(outData);
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
                            "maxFullness": chkFiltMax,
                            "inBusinessNews": chkFiltEnd
                        }
                    ],
                    "onlyMainRole": chkFiltMain,
                    "tonality": "any",
                    "onlyWithRiskFactors": chkFiltRisc,
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
            "excludeTechNews":      !chkFiltTech,
            "excludeAnnouncements": !chkFiltAd,
            "excludeDigests":       !chkFiltSumm
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
        return data;
    }
    function handleSearh(e){
        e.preventDefault();
        var err=!chkInn(inn);
        if(err){
            console.log("err_inn=",err);
        }
        
        if ((docs=="")||(docs==-1)){
            setDocs(-1);
            err = true;
            console.log("err_docs=",err);
        }
        err = err || !chkDate(dateStart,dateEnd);
        
        if (err==true){
            console.log("err_date=",err);
            return;
        } else {
            console.log("gj");
        
            const data = getData();
            console.log("data",data);
            loading_set();
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
                render={
                    <>
                        <div>
                            <DivFlex 
                                position='relative'
                                render={
                                    <>
                                        <InputDesc>ИНН компании</InputDesc>
                                        <Asterisk
                                            $warning={(inn==-1)||(inn==-2)}
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
                                            $valid={(inn>0)}
                                        ></Input>
                                        <InputErr>
                                            {   
                                                ((inn==-1)||(inn==-2))
                                                ?
                                                    (inn==-1)
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
                                            warning={(docs==-1)}
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
                                            $valid={!(docs==-1)}
                                        ></Input>
                                        <InputErr>
                                            {   
                                                (docs==-1)
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
                                                    warning={!dateGood}
                                                />
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
                                                                $valid={dateGood}
                                                                onChange={(e) => {
                                                                    setDateStart(e.target.value);
                                                                    setDateGood(true);
                                                                }}
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
                                                    $valid={dateGood}               
                                                    onChange={(e) => {
                                                        setDateEnd(e.target.value);
                                                        setDateGood(true);
                                                    }}
                                                ></Input>
                                            </>
                                        }
                                    />
                                    
                                    <DivFlex
                                        justify="center"
                                        render={
                                            <InputErr>
                                                {   
                                                    (!dateGood)
                                                    ? "Введите корректные данные"
                                                    : " "
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
    }),
    dispatch => ({
        get_histograms : (data) => {
            dispatch({
                type: "GET_HISTOGRAMS",
                docs: data.docs,
                date: data.date,
                risk: data.risk,
            });
        },
        get_objects : (data) => {
            dispatch({
                type: "GET_OBJECTS",
                encodedId   : data.encodedId   ,
                influence   : data.influence   ,
                similarCount: data.similarCount,
            });
        },
        loading_set : (data) => {
            dispatch({
                type: "LOADING_SET",
            });
        },
    })
)
(FormSearch)