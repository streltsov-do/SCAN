function init() {
    let initialValue=
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

    const localHistograms = JSON.parse(localStorage.getItem("searchHistograms"));
    if (localHistograms!==null){
        initialValue.cards       = localHistograms
    }
    const localObjects = JSON.parse(localStorage.getItem("searchObjects"));
    if (localObjects!==null){
        initialValue.encodedId   = localObjects.encodedId   ;
        initialValue.influence   = localObjects.influence   ;
        initialValue.similarCount= localObjects.similarCount;
    }
    return initialValue;
}

const initialState=init();

export default function search(state=initialState, action) {
    switch (action.type) {
        case 'SET_HISTOGRAMS':
            return(
                    {
                        ...state,

                        loading_his : false,
                        cards       : action.cards,
                        encodedId   : [],
                        influence   : [],
                        similarCount: [],
                    }
            )
            break;
        case 'SET_OBJECTS':
            return(
                {
                    ...state,

                    loading_obj : false,
                    encodedId   : action.encodedId   ,
                    influence   : action.influence   ,
                    similarCount: action.similarCount,
                }
            )
            break;
        case 'SET_LOADING':
            return(
                {
                    ...state,
                    
                    loading_his : true,
                    loading_obj : true,
                }
            )
            break;
        default: 
            return state;
    }
}