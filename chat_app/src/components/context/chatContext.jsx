import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import { chatReducer } from "../reducers/chatReducer";

const initialValues = {
  user: "",
  chats: [],
  selectedChat: null,
  profileModal: false,
  search: "",
  searchResult: [],
   loadingChat: false,
   error : "", 
  
};

const Chatcontext = createContext(initialValues);

const ChatProvider = ({ children }) => {
  //  const [chats, setChats] = useState([]);

  const [{user, selectedChat, chats, profileModal, search, searchResult, loadingChat} ,chatDispatch] = useReducer(chatReducer, initialValues);
  
  return (
    <Chatcontext.Provider value={{ user, chats, selectedChat, profileModal, search, searchResult,loadingChat, chatDispatch }}>
      {children}
    </Chatcontext.Provider>
  );
};

const useChat = () => useContext(Chatcontext);

export { useChat, ChatProvider };
