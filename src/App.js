import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

import ava from "./assets/ava.png";

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
