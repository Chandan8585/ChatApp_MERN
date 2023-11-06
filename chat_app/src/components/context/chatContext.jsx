import { createContext, useContext, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer";


const initialValues = {
user: "",
selecedChat: "",

};

const Chatcontext = createContext(initialValues);

const ChatProvider = ({children})=> {

    
    const [{user, selecedChat}, chatDispatch ] = useReducer(chatReducer, initialValues);
  return (
    <Chatcontext.Provider values={{user, selecedChat, chatDispatch}}>
        {children}
    </Chatcontext.Provider>
    )
}

const useChat =() => useContext(Chatcontext);

export { useChat ,ChatProvider};