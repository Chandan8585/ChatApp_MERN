export const chatReducer = (state, {type, payload})=> {
    switch(type){
        case "TOGGLE_PROFILE_MODAL": return {
            ...state,
            profileModal : !state.profileModal
        }
        case "CONTACT_SEARCH" : return {
            ...state,
            searchResult : payload
        }
        case "HANDLE_SEARCH_BTN" : return {
            ...state,
            search : payload
        }
        case "CHAT_SELECTION": return {
            ...state,
            selectedChat : payload
        }
        case "SETTING_CHAT_DATA": return {
            ...state,
            chats: [payload, ...state.chats]  
        }
        case "LOADING_CHAT" : return {
            ...state,
            loadingChat : !state.loadingChat
        }
        default:
            return state;
    }
}





