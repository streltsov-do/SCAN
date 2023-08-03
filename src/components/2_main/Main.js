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

    const routes = [
        {
            path: "/",
            element: 
                <PageMain
                    logged={logged}
                    tariff={tariff}
                />
            ,
            exact: true,
        },
        {
            path: "/autorization",
            element: 
                <PageAutorization/>
            ,
            exact: false,
        },
        {
            path: "/search",
            element: 
                <PageSearch
                    logged={logged}
                />
            ,
            exact: false,
        },
        {
            path: "/results",
            element: 
                <PageResults
                    logged={logged}
                />
            ,
            exact: false,
        },
        {
            path: "*",
            element: 
                <NotFound/>
            ,
            exact: false,
        },
    ];

    return (
        <Routes>
            {
                routes.map((item, index) => 
                    <Route
                        key     = {index}
                        path    = {item.path}
                        exact   = {item.exact}
                        element = {item.element}
                    />
                )
            }
        </Routes>
    )
}

export default connect(
    state => ({
        logged  : state.rLogin.logged,
    }),
    dispatch => ({
        logout: () => {
            dispatch({ type: 'LOGOUT'});
        }
    })
)
(Main);