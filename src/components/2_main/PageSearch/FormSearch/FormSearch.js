import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../../PageMain/custom/Button/Button";
import Checkbox from "./Checkbox/Checkbox";
import DropDown from "./DropDown/DrowDown";
import Asterisk from "./Asterisk/Asterisk";
import * as S from "./styled.js";

import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";

const arrFilt = [
    {
        name: "chkFiltMax",
        desc: "Признак максимальной полноты",
        defaultChecked: true,
        enabled: "true",
    },
    {
        name: "chkFiltEnd",
        desc: "Упоминания в бизнес-контексте",
        defaultChecked: true,
        enabled: "true",
    },
    {
        name: "chkFiltMain",
        desc: "Главная роль в публикации",
        defaultChecked: true,
        enabled: "true",
    },
    {
        name: "chkFiltRisc",
        desc: "Публикации только с риск-факторами",
        defaultChecked: false,
        enabled: "false",
    },
    {
        name: "chkFiltTech",
        desc: "Включать технические новости рынков",
        defaultChecked: false,
        enabled: "false",
    },
    {
        name: "chkFiltAd",
        desc: "Включать анонсы и календари",
        defaultChecked: true,
        enabled: "true",
    },
    {
        name: "chkFiltSumm",
        desc: "Включать сводки новостей",
        defaultChecked: false,
        enabled: "false",
    },
];

function FormSearch(props) {
    const { token, loading, set_histograms, set_objects, set_loading } = props;

    const [inn, setInn] = useState(7710137066);
    const [docs, setDocs] = useState(12);
    const [dateStart, setDateStart] = useState("2022-07-22");
    const [dateEnd, setDateEnd] = useState("2023-07-22");

    // const [inn      , setInn        ] = useState("");
    // const [docs     , setDocs       ] = useState("");
    // const [dateStart, setDateStart  ] = useState("");
    // const [dateEnd  , setDateEnd    ] = useState("");

    const [chkNecessary, setChkNecessary] = useState({
        inn: 0,
        docs: 0,
        date: 0,
    });

    const [tone, setTone] = useState(2);

    const [filters, setFilters] = useState({
        chkFiltMax: true,
        chkFiltEnd: true,
        chkFiltMain: true,
        chkFiltRisc: false,
        chkFiltTech: false,
        chkFiltAd: true,
        chkFiltSumm: false,
    });

    const handleFilters = (filterName) => {
        // console.log("fname", filterName);
        setFilters((prev) => ({
            ...prev,
            [filterName]: !prev[filterName], // [] - для вычисляемого имени свойства
        }));
    };

    const refInn = useRef(null);
    const refDocs = useRef(null);

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const limitInn = (val) => {
        setChkNecessary({
            inn: 0,
            docs: chkNecessary.docs,
            date: chkNecessary.date,
        });

        if (val.length > 10) {
            val = val.slice(0, 10);
            refInn.current.value = val;
        }
        setInn(val);
    };
    const limitDocs = (val) => {
        setChkNecessary({
            inn: chkNecessary.inn,
            docs: 0,
            date: chkNecessary.date,
        });

        if (val > 1000) {
            val = 1000;
        } else if (val < 1 && val !== "") {
            val = 1;
        }
        refDocs.current.value = val;
        setDocs(val);
    };

    function chkInn(val) {
        let arr = ("" + val).split("");
        arr = arr.map(Number);

        if (arr.length === 0) {
            setChkNecessary({
                inn: -2,
                docs: chkNecessary.docs,
                date: chkNecessary.date,
            });
            return -2;
        }
        if (arr.length !== 10) {
            setChkNecessary({
                inn: -1,
                docs: chkNecessary.docs,
                date: chkNecessary.date,
            });
            return -1;
        }
        const coefs = [2, 4, 10, 3, 5, 9, 4, 6, 8];

        let v_out = 0;
        for (var i = 0; i < 9; i++) {
            v_out += arr[i] * coefs[i];
        }
        v_out = v_out % 11;
        if (v_out === arr[9]) {
            return 1;
        }
        return -1;
    }

    function chkDate(start, end) {
        if (
            start > end ||
            start === undefined ||
            end === undefined ||
            start === "" ||
            end === ""
        ) {
            return -1;
        }
        return 1;
    }

    function fPostSearch(op, token, data) {
        const adr =
            op === "histograms" ? "objectsearch/histograms" : "objectsearch";
        fetch("https://gateway.scan-interfax.ru/api/v1/" + adr, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (op === "histograms") {
                    const outData = [];

                    for (let i = 0; i < data.data[0].data.length; i++) {
                        const obj = {
                            docs: data.data[0].data[i].value,
                            date: data.data[0].data[i].date.slice(0, 10),
                            risk: data.data[1].data[i].value,
                        };
                        outData.push(obj);
                    }
                    localStorage.setItem(
                        "searchHistograms",
                        JSON.stringify(outData),
                    );

                    set_histograms(outData);
                } else {
                    const outData = {
                        encodedId: [],
                        influence: [],
                        similarCount: [],
                    };

                    for (let i = 0; i < data.items.length; i++) {
                        outData.encodedId[i] = data.items[i].encodedId;
                        outData.influence[i] = data.items[i].influence;
                        outData.similarCount[i] = data.items[i].similarCount;
                    }

                    localStorage.setItem(
                        "searchObjects",
                        JSON.stringify(outData),
                    );

                    set_objects(outData);
                }
            })
            .catch(() => {
                console.log(op + " error");
                return false;
            });
    }

    function getData() {
        const DateInterval = {
            startDate: dateStart + "T00:00:00+03:00",
            endDate: dateEnd + "T23:59:59+03:00",
        };
        const searchContext = {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        sparkId: null,
                        entityId: null,
                        inn: inn,
                        maxFullness: !isMobile && filters.chkFiltMax,
                        inBusinessNews: !isMobile && filters.chkFiltEnd,
                    },
                ],
                onlyMainRole: !isMobile && filters.chkFiltMain,
                tonality:
                    tone === 2 ? "any" : tone === 1 ? "negative" : "positive",
                onlyWithRiskFactors: !isMobile && filters.chkFiltRisc,
                riskFactors: {
                    and: [],
                    or: [],
                    not: [],
                },
                themes: {
                    and: [],
                    or: [],
                    not: [],
                },
            },
            themesFilter: {
                and: [],
                or: [],
                not: [],
            },
        };
        const searchArea = {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
        };
        const attributeFilters = {
            excludeTechNews: !(!isMobile && filters.chkFiltTech),
            excludeAnnouncements: !(!isMobile && filters.chkFiltAd),
            excludeDigests: !(!isMobile && filters.chkFiltSumm),
        };

        const data = {
            intervalType: "month",
            histogramTypes: ["totalDocuments", "riskFactors"],
            issueDateInterval: DateInterval, // Search.DateInterval
            searchContext: searchContext, // Search.SearchContext
            similarMode: "duplicates", // none / duplicates
            limit: docs, // 1-1000
            sortType: "sourceInfluence", // issueDate / sourceInfluence
            sortDirectionType: "desc ", // desc / asc
            attributeFilters: attributeFilters, // Filter.Attributes
            searchArea: searchArea,
        };
        // console.log("data",data);
        return data;
    }
    function handleSearh(e) {
        e.preventDefault();
        let stateNecessary = {
            inn: 1,
            docs: 1,
            date: 1,
        };

        stateNecessary.inn = chkInn(inn);

        if (docs === "" || docs === -1 || docs === undefined) {
            stateNecessary.docs = -1;
        }

        stateNecessary.date = chkDate(dateStart, dateEnd);

        setChkNecessary(stateNecessary);
        if (
            stateNecessary.inn !== 1 ||
            stateNecessary.docs !== 1 ||
            stateNecessary.date !== 1
        ) {
            return;
        } else {
            const data = getData();
            set_loading();
            fPostSearch("histograms", token, data);
            fPostSearch("objectsearch", token, data);

            navigate("/results");
        }

        return;
    }

    return (
        <S.Form>
            <S.Div1>
                <div>
                    <S.DivRelative>
                        <S.InputDesc>ИНН компании</S.InputDesc>
                        <Asterisk good={chkNecessary.inn > -1} />
                    </S.DivRelative>
                    <S.DivRelativeCol>
                        <S.Input
                            type="number"
                            placeholder="10 цифр"
                            onChange={(e) => limitInn(e.target.value)}
                            ref={refInn}
                            defaultValue={inn}
                            $valid={chkNecessary.inn > -1}
                        ></S.Input>
                        <S.InputErr>
                            {chkNecessary.inn === -1 || chkNecessary.inn === -2
                                ? chkNecessary.inn === -1
                                    ? "Введите корректные данные"
                                    : "Обязательное поле"
                                : ""}
                        </S.InputErr>
                    </S.DivRelativeCol>
                </div>

                <div>
                    <S.InputDesc>Тональность</S.InputDesc>

                    <DropDown align="start" tone={tone} setTone={setTone} />
                </div>

                <div>
                    <S.DivRelative>
                        <S.InputDesc>
                            Количество документов в выдаче
                        </S.InputDesc>
                        <Asterisk good={!(chkNecessary.docs === -1)} />
                    </S.DivRelative>

                    <S.DivRelativeCol>
                        <S.Input
                            type="number"
                            placeholder="От 1 до 1000"
                            ref={refDocs}
                            onChange={(e) => {
                                limitDocs(e.target.value);
                            }}
                            defaultValue={docs}
                            $valid={!(chkNecessary.docs === -1)}
                        ></S.Input>
                        <S.InputErr>
                            {chkNecessary.docs === -1
                                ? "Обязательное поле"
                                : ""}
                        </S.InputErr>
                    </S.DivRelativeCol>
                </div>

                <S.DivRelativeCol>
                    <S.DivRelative>
                        <S.InputDesc m_top={9}>Диапазон поиска</S.InputDesc>
                        <Asterisk top={-1} good={chkNecessary.date !== -1} />
                    </S.DivRelative>
                    <S.DivDates mobile={isMobile?1:0}>
                        <S.DivRelative>
                            <S.Input
                                type="date"
                                width={176}
                                align="start"
                                defaultValue={dateStart}
                                $valid={chkNecessary.date !== -1}
                                onChange={(e) => {
                                    setChkNecessary({
                                        inn: chkNecessary.inn,
                                        docs: chkNecessary.docs,
                                        date: 0,
                                    });
                                    setDateStart(e.target.value);
                                }}
                            ></S.Input>
                            <S.DivDatePlaceholder
                                $enable={!dateStart}
                                left={isMobile ? 124 : 44}
                            >
                                Дата начала
                            </S.DivDatePlaceholder>
                        </S.DivRelative>
                        <S.DivRelative>
                            <S.Input
                                type="date"
                                width={176}
                                align="start"
                                defaultValue={dateEnd}
                                $valid={chkNecessary.date !== -1}
                                onChange={(e) => {
                                    setChkNecessary({
                                        inn: chkNecessary.inn,
                                        docs: chkNecessary.docs,
                                        date: 0,
                                    });
                                    setDateEnd(e.target.value);
                                }}
                            ></S.Input>
                            <S.DivDatePlaceholder
                                $enable={!dateEnd}
                                left={isMobile ? 128 : 44}
                            >
                                Дата конца
                            </S.DivDatePlaceholder>
                        </S.DivRelative>
                    </S.DivDates>

                    <S.DivCenter>
                        <S.InputErr>
                            {chkNecessary.date === -1
                                ? "Введите корректные данные"
                                : ""}
                        </S.InputErr>
                    </S.DivCenter>
                </S.DivRelativeCol>
            </S.Div1>
            <S.Div2 mobile={isMobile?1:0}>
                {arrFilt.map((item, index) => (
                    <Checkbox
                        key={index}
                        name={item.desc}
                        defaultChecked={item.defaultChecked}
                        enabled={item.enabled}
                        change={(e) => {
                            handleFilters(item.name);
                        }}
                    />
                ))}
            </S.Div2>
            <S.DivBtn mobile={isMobile?1:0}>
                <Button
                    name="Поиск"
                    width={isMobile ? 335 : 305}
                    align="flex-end"
                    m_bottom={10}
                    type="submit"
                    onClick={handleSearh}
                    disabled={loading}
                />
                <S.DivGray>* Обязательные к заполнению поля</S.DivGray>
            </S.DivBtn>
        </S.Form>
    );
}

export default connect(
    (state) => ({
        token: state.login.token,
        loading: state.login.loading,
    }),
    (dispatch) => ({
        set_histograms: (data) => {
            dispatch({
                type: "SET_HISTOGRAMS",
                cards: data,
            });
        },
        set_objects: (data) => {
            dispatch({
                type: "SET_OBJECTS",
                encodedId: data.encodedId,
                influence: data.influence,
                similarCount: data.similarCount,
            });
        },
        set_loading: (data) => {
            dispatch({
                type: "SET_LOADING",
            });
        },
    }),
)(FormSearch);
