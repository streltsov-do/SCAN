const initialState=[
    {
        loading_his : false,
        loading_obj : false,
        docs        : [],
        date        : [],
        risk        : [],
        encodedId   : [],
        influence   : [],
        similarCount: [],
    }
];

export default function rSearch(state=initialState, action) {
    switch (action.type) {
        case 'GET_HISTOGRAMS':
            return(
                [
                    ...state,
                    {
                        loading_his : false,
                        loading_obj : state[state.length-1].loading_obj,
                        docs        : action.docs,
                        date        : action.date,
                        risk        : action.risk,
                        encodedId   : [],
                        influence   : [],
                        similarCount: [],
                    }
                ]
            )
            break;
        case 'GET_OBJECTS':
            return(
                [
                    ...state,
                    {
                        loading_his : state[state.length-1].loading_his,
                        loading_obj : false,
                        docs        : state[state.length-1].loading,
                        docs        : state[state.length-1].docs,
                        date        : state[state.length-1].date,
                        risk        : state[state.length-1].risk,
                        encodedId   : action.encodedId   ,
                        influence   : action.influence   ,
                        similarCount: action.similarCount,
                    }
                ]
            )
            break;
        case 'LOADING_SET':
            return(
                [
                    ...state,
                    {
                        loading_his : true,
                        loading_obj : true,
                        docs        : state[state.length-1].docs,
                        date        : state[state.length-1].date,
                        risk        : state[state.length-1].risk,
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