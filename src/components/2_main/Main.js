import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled, {css} from 'styled-components/macro';

import PageMain from "./PageMain/PageMain";
import PageAutorization from "./PageAutorization/PageAutorization";


function Main(props) {
    const {page} = props;

    return (
        <Routes>
            {/* <Route path="*" element={<NotFound></NotFound>} */}

            <Route exact path="/"
                element={
                    <PageMain/>
                }
            />
            <Route 
                path="/autorization"
                element={
                    <PageAutorization></PageAutorization>
                }
            />
            <Route 
                path="/search"
                element={
                    <PageAutorization></PageAutorization>
                }
            />
            <Route 
                path="/results"
                element={
                    <PageAutorization></PageAutorization>
                }
            />
        </Routes>
    )
}

export default Main;