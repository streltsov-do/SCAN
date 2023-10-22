import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../../../components/Button/Button";
import { MOBILE_WIDTH_BREAKPOINT } from "../../../utils/consts";
import { RootState } from "../../../reducers/reducers";
import { useAppDispatch, useAppSelector } from "../../../reducers/hooks";
import {
    setHistograms,
    setObjects,
    setLoading,
    CardsData,
    HistogramsData,
} from "../../../reducers/searchSlice";

import Checkbox from "./Checkbox/Checkbox";
import DropDown from "./DropDown/DrowDown";
import Asterisk from "./Asterisk/Asterisk";
import * as S from "./styled";
import { FiltNames, FILT_ARR } from "./consts";

function FormSearch() {
    const token = useAppSelector((state: RootState) => state.login.token);
    const loading = useAppSelector((state: RootState) => state.login.loading);

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

    const handleFilters = (filterName: FiltNames) => {
        setFilters((prev) => ({
            ...prev,
            [filterName]: !prev[filterName], // [] - для вычисляемого имени свойства
        }));
    };

    const refInn = React.useRef<HTMLInputElement>(null);
    const refDocs = React.useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    const limitInn = (val: string) => {
        setChkNecessary({
            inn: 0,
            docs: chkNecessary.docs,
            date: chkNecessary.date,
        });
        let val10 = val;
        if (val10.length > 10) {
            val10 = val10.slice(0, 10);
            if (refInn.current) {
                refInn.current.value = val10;
            }
        }
        setInn(Number(val10));
    };
    const limitDocs = (val: string) => {
        setChkNecessary({
            inn: chkNecessary.inn,
            docs: 0,
            date: chkNecessary.date,
        });
        let valNum = Number(val);
        if (valNum > 1000) {
            valNum = 1000;
        } else if (valNum < 1 && valNum !== 0) {
            valNum = 1;
        }
        if (refDocs.current) {
            refDocs.current.value = valNum.toString();
        }
        setDocs(valNum);
    };

    function chkInn(val: number) {
        const arr: string[] = ("" + val).split("");
        const arrNumbers: number[] = arr.map(Number);

        if (arrNumbers.length === 0) {
            setChkNecessary({
                inn: -2,
                docs: chkNecessary.docs,
                date: chkNecessary.date,
            });
            return -2;
        }
        if (arrNumbers.length !== 10) {
            setChkNecessary({
                inn: -1,
                docs: chkNecessary.docs,
                date: chkNecessary.date,
            });
            return -1;
        }
        const coefs: number[] = [2, 4, 10, 3, 5, 9, 4, 6, 8];

        let v_out: number = 0;
        for (let i = 0; i < 9; i++) {
            v_out += arrNumbers[i] * coefs[i];
        }
        v_out = v_out % 11;
        if (v_out === arrNumbers[9]) {
            return 1;
        }
        return -1;
    }

    function chkDate(start: string, end: string) {
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

    function fPostSearch(op: string, token: string, data: any) {
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
                    const outData: CardsData[] = [];

                    for (let i = 0; i < data.data[0].data.length; i++) {
                        const obj: CardsData = {
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

                    dispatch(setHistograms(outData));
                } else {
                    const outData: HistogramsData = {
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

                    dispatch(setObjects(outData));
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
    function handleSearh(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        let stateNecessary = {
            inn: 1,
            docs: 1,
            date: 1,
        };

        stateNecessary.inn = chkInn(inn);

        if (docs === -1 || docs === undefined) {
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
            dispatch(setLoading());
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
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => limitInn(e.target.value)}
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

                    <DropDown $align="start" tone={tone} setTone={setTone} />
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
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
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
                        <S.InputDesc $margin_top={9}>
                            Диапазон поиска
                        </S.InputDesc>
                        <Asterisk $top={-1} good={chkNecessary.date !== -1} />
                    </S.DivRelative>
                    <S.DivDates $mobile={isMobile}>
                        <S.DivRelative>
                            <S.Input
                                type="date"
                                width={176}
                                $align="start"
                                defaultValue={dateStart}
                                $valid={chkNecessary.date !== -1}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
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
                                $left={isMobile ? 124 : 44}
                            >
                                Дата начала
                            </S.DivDatePlaceholder>
                        </S.DivRelative>
                        <S.DivRelative>
                            <S.Input
                                type="date"
                                width={176}
                                $align="start"
                                defaultValue={dateEnd}
                                $valid={chkNecessary.date !== -1}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => {
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
                                $left={isMobile ? 128 : 44}
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
            <S.Div2 $mobile={isMobile}>
                {FILT_ARR.map((item, index) => (
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
            <S.DivBtn $mobile={isMobile}>
                <Button
                    width={isMobile ? 335 : 305}
                    $align="flex-end"
                    $margin_bottom={10}
                    type="submit"
                    onClick={handleSearh}
                    disabled={loading}
                >
                    Поиск
                </Button>
                <S.DivGray>* Обязательные к заполнению поля</S.DivGray>
            </S.DivBtn>
        </S.Form>
    );
}

export { FormSearch };
