import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import styled, {css} from 'styled-components/macro';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PageMain from "./PageMain/PageMain";
import PageAutorization from "./PageAutorization/PageAutorization";
import PageSearch from "./PageSearch/PageSearch";
import PageResults from "./PageResults/PageResults";

function Main(props) {
    const {logged, tariff, logout} = props;

    useEffect(() => {
        const localData1 = localStorage.getItem("auth");
        const localData = JSON.parse(localStorage.getItem("auth"));

        let authorised=false;
        if (localData!=undefined){
            let getData     = new Date(Date.now());
            let tokenData   = new Date(localData.expire);

            if (tokenData>getData){
                authorised=true;
            }
        }


        if (!authorised){
            localStorage.removeItem("auth");
            logout();
        }
        
    },[])

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
                    <PageAutorization/>
                }
            />
            <Route 
                path="/search"
                element={
                    <PageSearch
                        logged={logged}
                    />
                }
            />
            <Route 
                path="/results"
                element={
                    <PageResults
                        logged={logged}
                    />
                }
            />
        </Routes>
    )
}

export default connect(
    state => ({
        logged  : state.rLogin[state.rLogin.length-1].logged,
    }),
    dispatch => ({
        logout: () => {
            dispatch({ type: 'LOGOUT'});
        }
    })
)
(Main);