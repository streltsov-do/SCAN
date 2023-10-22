import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    id: number;
    logged: boolean;
    token: string;
    expire: string;
    loading: boolean;
}

function init() {
    const localData: string | null = localStorage.getItem("auth");

    let initialValue: LoginState = {
        id: -1,
        logged: false,
        token: "",
        expire: "",
        loading: false,
    };
    if (typeof localData === "string") {
        const data: LoginState = JSON.parse(localData);
        initialValue = {
            id: 0,
            logged: true,
            token: data.token,
            expire: data.expire,
            loading: false,
        };
    }
    return initialValue;
}

const initialState: LoginState = init();

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        auth: (state, action: PayloadAction<LoginState>) => {
            state.id = action.payload.id;
            state.logged = action.payload.logged;
            state.token = action.payload.token;
            state.expire = action.payload.expire;
            state.loading = action.payload.loading;
        },
        end_loading: (state) => {
            state.loading = false;
        },
        logout: (state) => {
            state.id = -1;
            state.loading = false;
            state.logged = false;
            state.token = "";
            state.expire = "";
        },
    },
});

export const { auth, end_loading, logout } = loginSlice.actions;

export default loginSlice.reducer;