import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import { MOBILE_WIDTH_BREAKPOINT } from "../../utils/consts";
import Button from "../../components/Button/Button";
import { RootState } from "../../reducers/reducers";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { ScanDoc } from "../../types/cards";

import { SearchCarousel } from "./SearchCarousel/SearchCarousel";
import CardDoc from "./CardDoc/CardDoc";
import { getContent } from "./decoder";
import * as S from "./styled";

import sf from "../../assets/sf.png";
import Searching from "./Searching.svg";

const dummyPublications = [
    {
        date: "13.09.2021",
        source: "Комсомольская правда KP.RU",
        title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        img: sf,
        desc: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.${(
            <br></br>
        )}Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
        link: 0,
        attributes: {
            isTechNews: true,
            isAnnouncement: true,
            isDigest: true,
            influence: 352.0,
            wordCount: 1235,
            coverage: {
                value: 1402211.0,
                state: "hasData",
            },
        },
    },
];

function PageResults() {
    const logged = useAppSelector((state: RootState) => state.login.logged);
    const token = useAppSelector((state: RootState) => state.login.token);
    const stateSearch = useAppSelector((state: RootState) => state.search);

    const [loading, setLoading] = useState(true);
    const [publications, setPublications] = useState<ScanDoc[]>([]);
    // useState(dummyPublications)
    const [total, setTotal] = useState(0);
    const [showNum, setShowNum] = useState(0);
    const [imgOffset, setImgOffset] = useState(["auto", "103.44px"]);

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: MOBILE_WIDTH_BREAKPOINT });

    useEffect(() => {
        setLoading(stateSearch.loading_his || stateSearch.loading_obj);
    }, [stateSearch]);

    useEffect(() => {
        !logged && navigate("/");

        if (loading === false && showNum === 0 && total === 0) {
            setTotal(stateSearch.encodedId.length);
            return fPostDocs();
        }
    }, [showNum, total, loading, logged]);

    function handeResize() {
        const v_width = window.innerWidth;

        let left = v_width < 1210 ? "521px" : "auto";
        let right = v_width < 1210 ? "auto" : "103.44px";
        setImgOffset([left, right]);
    }

    useEffect(() => {
        window.addEventListener("resize", handeResize);

        return () => {
            window.removeEventListener("resize", handeResize);
        };
    }, [imgOffset]);

    useEffect(() => {
        handeResize();
    }, []);

    function fPostDocs() {
        let maxI = 10;
        const len = stateSearch.encodedId.length - showNum;
        let last = false;
        if (len <= maxI) {
            maxI = len;
            last = true;
        }
        const data = {
            ids: stateSearch.encodedId.slice(showNum, showNum + maxI),
        };

        fetch("https://gateway.scan-interfax.ru/api/v1/documents", {
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
                if (data.errorCode === undefined) {
                    // console.log("DATA_type =", typeof data);
                    // console.log("DATA =", data);

                    let outData: ScanDoc[] = [];
                    let outDataFull: ScanDoc[] = publications;
                    if (last) {
                        setShowNum(-1);
                    } else {
                        setShowNum(showNum + 10);
                    }
                    for (let i = 0; i < maxI; i++) {
                        outData[i] = data[i].ok;
                        const { bgUrl, content } = getContent(
                            data[i].ok.content.markup,
                            2000,
                        );
                        outData[i].desc = content;
                        outData[i].img = bgUrl;
                        outDataFull.push(outData[i]);
                    }
                    setPublications(outDataFull);
                    localStorage.setItem("cards", JSON.stringify(outDataFull));
                    return;
                }
                const errorMsg = data.errorCode + "\nMessage: " + data.message;
                throw new Error(errorMsg);
            })
            .catch((error) => {
                console.log(
                    "%c PostDocsError: " + error,
                    "background: #222; color: red",
                );
            });
    }

    return (
        <>
            {logged && (
                <S.DivBackground>
                    <S.DivMain>
                        <S.DivTitle $mobile={isMobile}>
                            {loading ? (
                                <>
                                    <S.Title>
                                        Ищем. Скоро
                                        <br />
                                        будут результаты
                                    </S.Title>
                                    <S.TitleDesc>
                                        Поиск может занять некоторое время,
                                        <br />
                                        просим сохранять терпение.
                                    </S.TitleDesc>
                                </>
                            ) : (
                                <>
                                    <S.Title>
                                        Запрос выполнен
                                        <br /> 
                                    </S.Title>
                                    <S.TitleDesc>
                                         <br /> 
                                    </S.TitleDesc>
                                </>
                            )}
                        </S.DivTitle>
                        <S.ImgSearching
                            src={Searching}
                            $left={imgOffset[0]}
                            $right={imgOffset[1]}
                        ></S.ImgSearching>
                        <div>
                            <S.Title2 $margin_bottom={17}>
                                Общая сводка
                            </S.Title2>
                            <S.Title2Desc $margin_bottom={27}>
                                Найдено {total} вариантов
                            </S.Title2Desc>
                        </div>
                        <SearchCarousel
                            loading={loading}
                            parent_p_left={S.PADDING_LEFT}
                            cards={stateSearch.cards}
                            $margin_bottom={isMobile ? 57 : 107}
                        />

                        <S.Title2 $margin_bottom={58}>
                            Список документов
                        </S.Title2>
                        <S.CardGrid>
                            {publications !== undefined &&
                            publications.length > 0 ? (
                                publications.map((item, index) => (
                                    <CardDoc
                                        key={index}
                                        issueDate={item.issueDate.slice(0, 10)}
                                        source={item.source.name}
                                        title={item.title.text}
                                        // type={item.type}
                                        img={item.img}
                                        desc={item.desc}
                                        url={item.url}
                                        wordCount={item.attributes.wordCount}
                                        isTechNews={item.attributes.isTechNews}
                                        isAnnouncement={
                                            item.attributes.isAnnouncement
                                        }
                                        isDigest={item.attributes.isDigest}
                                    />
                                ))
                            ) : (
                                <>Загрузка...</>
                            )}
                        </S.CardGrid>
                        <S.DivBtn $mobile={isMobile}>
                            {showNum !== -1 &&
                                publications !== undefined &&
                                publications.length > 0 && (
                                    <Button
                                        onClick={(e) => {
                                            fPostDocs();
                                        }}
                                        disabled={loading}
                                    >
                                        Показать больше
                                    </Button>
                                )}
                        </S.DivBtn>
                    </S.DivMain>
                </S.DivBackground>
            )}
        </>
    );
}

export { PageResults };
