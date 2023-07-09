import React from 'react';
import { BrowserRouter } from "react-router-dom"

import Header   from './components/1_header/Header';
import Main     from './components/2_main/Main';
import Footer   from './components/3_footer/Footer';

import ava from "./components/utils/img/ava.png";

function App(props) {
    const name = "Алексей А.";
    const avatar = ava;
    const tariff = 1;

    return (
        <BrowserRouter>
            <div className="App">
                
                <Header 
                    name={name} 
                    avatar={avatar}
                />

                <Main 
                    tariff={tariff}
                />

                <Footer></Footer>
            
            </div>
        </BrowserRouter>
    );
}

export default App;
