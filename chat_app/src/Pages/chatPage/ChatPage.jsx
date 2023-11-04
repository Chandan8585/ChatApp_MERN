import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useChat } from '../../components/context/chatContext';
import SideDrawer from '../../components/sideDrawer/SideDrawer';
import MyChat from '../../components/myChat/MyChat';
import { Box } from "@chakra-ui/react";
const ChatPage = () => {
    const [chat, setChat] = useState([]);
    const {user} = useChat();
    const token = localStorage.getItem("token");
    useEffect(()=> {
    (async ()=> {
        try{
            const response = await axios.get("https://chat-backend-vzo7.onrender.com/api/chats");
            console.log(response.data);
            setChat(response.data);
        } catch (error) {
            console.log(error);
        }
    })()
    }, []); 
  return (
    <div style={{width: "100%"}}>
       {token && <SideDrawer/> }
      <Box d="flex" justify-content='space-between' w='100%' h='91.5vh' p='10px'>
        {token && <MyChat/>}
      </Box>
    </div>
  )
}

export default ChatPage