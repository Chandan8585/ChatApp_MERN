export const chatReducer = (state, {type, payload})=> {
    switch(type){
        case "USER_DETAIL": return {
            ...state,
            user: payload
        }
        case "OPEN_PROFILE_MODAL": return {
            ...state,
            profileModal : true
        }
        default:
            return state;
    }
}


