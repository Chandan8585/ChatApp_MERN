import React, { createContext, useContext, useReducer } from "react";
import { chatReducer } from "../reducers/chatReducer";

const initialValues = {
  user: "",
  selecedChat: "",
  profileModal: false,
};

const Chatcontext = createContext(initialValues);

const ChatProvider = ({ children }) => {
  const [state, chatDispatch] = useReducer(chatReducer, initialValues);
  
  return (
    <Chatcontext.Provider value={{ ...state, chatDispatch }}>
      {children}
    </Chatcontext.Provider>
  );
};

const useChat = () => useContext(Chatcontext);

export { useChat, ChatProvider };
