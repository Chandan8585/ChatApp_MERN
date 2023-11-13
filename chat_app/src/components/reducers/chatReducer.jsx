export const chatReducer = (state, {type, payload})=> {
    switch(type){
        case "USER_DETAIL": return {
            ...state,
            user: payload
        }
        case "TOGGLE_PROFILE_MODAL": return {
            ...state,
            profileModal : !state.profileModal
        }
        default:
            return state;
    }
}


