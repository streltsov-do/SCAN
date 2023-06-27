import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled, {css} from 'styled-components/macro';
import { connect } from "react-redux";

import PageMain from "./PageMain/PageMain";
import PageAutorization from "./PageAutorization/PageAutorization";
import PageSearch from "./PageSearch/PageSearch";
import PageResults from "./PageResults/PageResults";


function Main(props) {
    const {logged, loading, tariff} = props;

    return (
        <Routes>
            {/* <Route path="*" element={<NotFound></NotFound>} */}

            <Route exact path="/"
                element={
                    <PageMain
                        logged={logged}
                        tariff={tariff}
                    />
                }
            />
            <Route 
                path="/autorization"
                element={
                    <PageAutorization
                    />
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

// export default Main;

export default connect(
    state => ({
        logged  : state.rLogin[state.rLogin.length-1].logged,
        loading : state.rLogin[state.rLogin.length-1].loading,
    }), 
    dispatch => ({

    })
)
(Main);