import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import FontStyles from "./styles/Fonts/FontStyles";
import { store } from "./reducers/reducers";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <FontStyles />
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
