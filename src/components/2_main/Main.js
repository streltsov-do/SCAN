import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled, {css} from 'styled-components/macro';

import PageMain from "./PageMain/PageMain";
import PageAutorization from "./PageAutorization/PageAutorization";
import PageSearch from "./PageSearch/PageSearch";
import PageResults from "./PageResults/PageResults";


function Main(props) {
    const {loading} = props;

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
                    <PageSearch
                    />
                }
            />
            <Route 
                path="/results"
                element={
                    <PageResults
                        loading={loading}
                    />
                }
            />
        </Routes>
    )
}

export default Main;