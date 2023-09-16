import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/1_header/Header";
import Main from "./components/2_main/Main";
import Footer from "./components/3_footer/Footer";

import ava from "./components/utils/img/ava.png";

const NAME = "Алексей А.";
const TARIFF = 1;

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header name={NAME} avatar={ava} />

                <Main tariff={TARIFF} />

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
