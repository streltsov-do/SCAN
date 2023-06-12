import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { useState } from 'react';
import styled, {css, createGlobalStyle} from 'styled-components';

import Header from './components/1_header/Header';
import Main from './components/2_main/Main';
import Footer from './components/3_footer/Footer';

import ava from "./components/utils/img/ava.png";
import sf from "./components/utils/img/sf.png"

// const logout = () = {

// }

function App() {
    const [logged,setLogged] = useState(true);

    // const logged = true;
    const loading = false;
    const name = "Алексей А.";
    const avatar = ava;
    const page="main";
    const tariff=2;

    const publications = [
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

    return (
        <BrowserRouter>
            <div className="App">
                
                <Header 
                    logged={logged} 
                    setLogged={setLogged}
                    loading={loading} 
                    name={name} 
                    avatar={avatar}
                />

                <Main 
                    logged={logged} 
                    loading={loading}
                    tariff={tariff}
                    publications={publications}
                />

                <Footer></Footer>
            
            </div>
        </BrowserRouter>
    );
}

export default App;
