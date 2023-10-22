import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />

                <Main />

                <Footer /> 
            </div>
        </BrowserRouter>
    );
}

export default App;
