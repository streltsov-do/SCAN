import React from 'react';
import { BrowserRouter } from "react-router-dom"

import Header   from './components/1_header/Header';
import Main     from './components/2_main/Main';
import Footer   from './components/3_footer/Footer';
import DivFlex from './components/utils/DivFlex/DivFlex';

import ava from "./components/utils/img/ava.png";

function App(props) {
    const NAME = "Алексей А.";
    const AVATAR = ava;
    const TARIFF = 1;

    return (
        <BrowserRouter>
            <DivFlex
                direction="column"
                width="auto"
                render={
                    <>
                        <Header 
                            name={NAME} 
                            avatar={AVATAR}
                        />

                        <Main 
                            tariff={TARIFF}
                        />

                        <Footer></Footer>
                    </>
                }   
            
            />
        </BrowserRouter>
    );
}

export default App;
