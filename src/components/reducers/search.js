function init() {
    let initialValue=[
        {
            loading_his : false,
            loading_obj : false,
            cards       : [{
                docs        : 0,
                date        : 0,
                risk        : 0,
            }],
            encodedId   : [],
            influence   : [],
            similarCount: [],
        }
    ]

    const localHistograms = JSON.parse(localStorage.getItem("searchHistograms"));
    if (localHistograms!==null){
        initialValue[0].cards       = localHistograms
    }
    const localObjects = JSON.parse(localStorage.getItem("searchObjects"));
    if (localObjects!==null){
        initialValue[0].encodedId   = localObjects.encodedId   ;
        initialValue[0].influence   = localObjects.influence   ;
        initialValue[0].similarCount= localObjects.similarCount;
    }
    return initialValue;
}

const initialState=init();

export default function rSearch(state=initialState, action) {
    switch (action.type) {
        case 'SET_HISTOGRAMS':
            return(
                [
                    ...state,
                    {
                        loading_his : false,
                        loading_obj : state[state.length-1].loading_obj,
                        cards       : action.cards,
                        // docs        : action.docs,
                        // date        : action.date,
                        // risk        : action.risk,
                        encodedId   : [],
                        influence   : [],
                        similarCount: [],
                    }
                ]
            )
            break;
        case 'SET_OBJECTS':
            return(
                [
                    ...state,
                    {
                        loading_his : state[state.length-1].loading_his,
                        loading_obj : false,
                        cards       : state[state.length-1].cards,
                        // docs        : state[state.length-1].docs,
                        // date        : state[state.length-1].date,
                        // risk        : state[state.length-1].risk,
                        encodedId   : action.encodedId   ,
                        influence   : action.influence   ,
                        similarCount: action.similarCount,
                    }
                ]
            )
            break;
        case 'SET_LOADING':
            return(
                [
                    ...state,
                    {
                        loading_his : true,
                        loading_obj : true,
                        cards       : state[state.length-1].cards,
                        // docs        : state[state.length-1].docs,
                        // date        : state[state.length-1].date,
                        // risk        : state[state.length-1].risk,
                        encodedId   : state[state.length-1].encodedId   ,
                        influence   : state[state.length-1].influence   ,
                        similarCount: state[state.length-1].similarCount,
                    }
                ]
            )
            break;
        default: 
            return state;
    }
}