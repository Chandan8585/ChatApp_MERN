import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext();

const MessageProvider = ({children})=> {
   const [selectMessage, setSelectMessage] = useState();
   const [user, setUser ] = useState([]);
   const [Messages, setMessages] = useState();

   return (
    <MessageContext.Provider value={{selectMessage, setSelectMessage, user, setUser, Messages, setMessages}}>
        {children}
    </MessageContext.Provider>
   )
}

export const MessageState = ()=> {
    return useContext(MessageContext);
}

export default MessageProvider;


