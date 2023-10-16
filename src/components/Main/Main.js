import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import PageMain from "../../pages/PageMain/PageMain";
import PageAutorization from "../../pages/PageAutorization/PageAutorization";
import PageSearch from "../../pages/PageSearch/PageSearch";
import PageResults from "../../pages/PageResults/PageResults";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import { TARIFF } from "../../utils/consts";

function Main(props) {
    const { logged, logout } = props;

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("auth"));

        let authorised = false;
        if (!!localData) {
            let getData = new Date(Date.now());
            let tokenData = new Date(localData.expire);

            if (tokenData > getData) {
                authorised = true;
            }
        }

        if (!authorised) {
            localStorage.removeItem("auth");
            logout();
        }
    }, []);

    const ROUTES_ARR = [
        {
            path: "/",
            element: <PageMain logged={logged} tariff={TARIFF} />,
            exact: true,
        },
        {
            path: "/autorization",
            element: <PageAutorization />,
            exact: false,
        },
        {
            path: "/search",
            element: <PageSearch logged={logged} />,
            exact: false,
        },
        {
            path: "/results",
            element: <PageResults logged={logged} />,
            exact: false,
        },
        {
            path: "*",
            element: <PageNotFound />,
            exact: false,
        },
    ];

    return (
        <Routes>
            {ROUTES_ARR.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    element={item.element}
                />
            ))}
        </Routes>
    );
}

export default connect(
    (state) => ({
        logged: state.login.logged,
    }),
    (dispatch) => ({
        logout: () => {
            dispatch({ type: "LOGOUT" });
        },
    }),
)(Main);
