import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import PageMain from "../../pages/PageMain/PageMain";
import { PageAutorization } from "../../pages/PageAutorization/PageAutorization";
import { PageSearch } from "../../pages/PageSearch/PageSearch";
import { PageResults } from "../../pages/PageResults/PageResults";
import { PageNotFound } from "../../pages/PageNotFound/PageNotFound";
import { TARIFF } from "../../utils/consts";
import { RootState } from "../../reducers/reducers";
import { useAppDispatch, useAppSelector } from "../../reducers/hooks";
import { logout } from "../../reducers/loginSlice";

function Main() {
    // const { logged, logout } = props;
    const logged = useAppSelector((state: RootState) => state.login.logged);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const localData: string | null = localStorage.getItem("auth");

        let authorised = false;

        if (typeof localData === "string") {
            const data = JSON.parse(localData);
            let getData = new Date(Date.now());
            let tokenData = new Date(data.expire);

            if (tokenData > getData) {
                authorised = true;
            }
        }

        if (!authorised) {
            localStorage.removeItem("auth");
            dispatch(logout());
        }
    }, []);

    type tRoutesArr = Array<{
        path: string;
        element: React.ReactElement;
        // exact: boolean;
    }>;
    const ROUTES_ARR: tRoutesArr = [
        {
            path: "/",
            element: <PageMain logged={logged} tariff={TARIFF} />,
            // exact: true,
        },
        {
            path: "/autorization",
            element: <PageAutorization />,
            // exact: false,
        },
        {
            path: "/search",
            element: <PageSearch logged={logged} />,
            // exact: false,
        },
        {
            path: "/results",
            element: <PageResults />,
            // exact: false,
        },
        {
            path: "*",
            element: <PageNotFound />,
            // exact: false,
        },
    ];

    return (
        <Routes>
            {ROUTES_ARR.map((item, index) => (
                <Route
                    key={index}
                    path={item.path}
                    // exact={item.exact}
                    element={item.element}
                />
            ))}
        </Routes>
    );
}

export { Main };
