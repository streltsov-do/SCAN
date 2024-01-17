// import { combineReducers } from "redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";

// import login from "./login";
// import search from "./search";

import loginReducer from "./loginSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        search: searchReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export default combineReducers({
//     login,
//     search,
// });
