import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import { connect } from "react-redux";

import PageMain from "./PageMain/PageMain";
import PageAutorization from "./PageAutorization/PageAutorization";
import PageSearch from "./PageSearch/PageSearch";
import PageResults from "./PageResults/PageResults";
import NotFound from "../utils/NotFound/NotFound";

function Main(props) {
    const {logged, tariff, logout} = props;

    useEffect(() => {
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

            <Route 
                path="*" 
                element={<NotFound/>}
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