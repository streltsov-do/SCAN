function init(){
    const localData = JSON.parse(localStorage.getItem("auth"));

    let initialValue = {
        id      : -1,
        logged  : false,
        token   : 0,
        expire  : 0,
        loading : false,
    }
    // console.log("localData",localData);
    if (localData!==null){
        initialValue={
            id      : 0,
            logged  : true,
            token   : localData.token,
            expire  : localData.expire,
            loading : false,
        }
    } 
    return initialValue;
}

const initialState=init();

export default function rLogin(state=[initialState], action) {
    switch (action.type) {
        case 'AUTH':
            return(
                [
                    ...state,
                    {
                        id      : action.id,
                        logged  : action.logged,
                        token   : action.token,
                        expire  : action.expire,
                        loading : action.loading,
                    }
                ]
            )
            break;
        case 'END_LOADING':
            return([
                ...state,
                    {
                        id      : state[state.length-1].id,
                        logged  : state[state.length-1].logged,
                        token   : state[state.length-1].token,
                        expire  : state[state.length-1].expire,
                        loading : action.loading,
                    }
            ])
            break;
        case 'LOGOUT':
            return (
                [
                    ...state,
                    {
                        id      : -1,
                        loading : false,
                        logged  : false,
                        token   : "",
                        expire  : 0,
                    }
                ]
            )
            break;
        default: 
            return state;
    }
}