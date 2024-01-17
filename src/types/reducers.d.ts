interface LoginLocal {
    token: string;
    expire: number;
}

interface LoginAuth extends LoginLocal {
    logged: boolean;
    loading: boolean;
}

interface Login extends LoginAuth {
    id: number;
}

interface LoginAction extends Login {
    type: "AUTH" | "END_LOADING" | "LOGOUT";
}

interface Cards {
    docs: number;
    date: number;
    risk: number;
}

interface Search {
    loading_his: boolean;
    loading_obj: boolean;
    cards: Array<Cards>;
    encodedId: Array;
    influence: Array;
    similarCount: Array;
}

interface SearchAction extends Search {
    type: string;
}

export { LoginLocal, LoginAuth, Login, LoginAction, Search, SearchAction };
