let initialState = {
    number : 0,
    id : "",
    passwprd : ""
}


function reducer(state = initialState, action) {
    console.log(action)
    if(action.type === "INCREMENT") {
        // ...state , number 의 의미
        // => state 값을 유지를 하 되, number 의 값만 바꿔라
        return {...state,number : state.number + action.payload.num}
    }
    if(action.type === "DECREMENT") {
        return {...state,number : state.number - 1}
    }
    if(action.type === "LOGIN"){
        return {...state, 
            id : action.payload.id, 
            password : action.payload.password
        }
    }
    
    return {...state}
}

export default reducer