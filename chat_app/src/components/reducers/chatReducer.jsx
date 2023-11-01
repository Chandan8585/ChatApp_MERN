export const chatReducer = (state, {type, payload})=> {
    switch(type){
        case "SET_USER": return {
            ...state,
            user: payload

        }
    }
}


