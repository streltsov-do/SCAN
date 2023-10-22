import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CardsData {
    docs: number;
    date: string;
    risk: number;
}

export interface HistogramsData {
    encodedId: number[];
    influence: number[];
    similarCount: number[];
}

export interface SearchState {
    loading_his: boolean;
    loading_obj: boolean;
    cards: CardsData[];
    encodedId: number[];
    influence: number[];
    similarCount: number[];
}

function init() {
    let initialValue: SearchState = {
        loading_his: false,
        loading_obj: false,
        cards: [
            {
                docs: 0,
                date: "",
                risk: 0,
            },
        ],
        encodedId: [],
        influence: [],
        similarCount: [],
    };

    const localHistograms = localStorage.getItem("searchHistograms");
    if (typeof localHistograms === "string") {
        const data = JSON.parse(localHistograms);
        initialValue.cards = data;
    }
    const localObjects = localStorage.getItem("searchObjects");
    if (typeof localObjects === "string") {
        const data = JSON.parse(localObjects);
        initialValue.encodedId = data.encodedId;
        initialValue.influence = data.influence;
        initialValue.similarCount = data.similarCount;
    }
    return initialValue;
}

const initialState: SearchState = init();

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setHistograms: (state, action: PayloadAction<CardsData[]>) => {
            state.loading_his = false;
            state.cards = action.payload;
            state.encodedId = [];
            state.influence = [];
            state.similarCount = [];
        },
        setObjects: (state, action: PayloadAction<HistogramsData>) => {
            state.loading_obj = false;
            state.encodedId = action.payload.encodedId;
            state.influence = action.payload.influence;
            state.similarCount = action.payload.similarCount;
        },
        setLoading: (state) => {
            state.loading_his = true;
            state.loading_obj = true;
        },
    },
});

export const { setHistograms, setObjects, setLoading } = searchSlice.actions;

export default searchSlice.reducer;
