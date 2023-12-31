
import React, { useEffect, useState } from 'react';
import './chatPage.css';
import axios from 'axios';
import { useChat } from '../../components/context/chatContext';
import SideDrawer from '../../components/sideDrawer/SideDrawer';
import MyChat from '../../components/myChat/MyChat';
import { Box } from '@chakra-ui/layout';
import ChatBox from '../../components/chatBox/ChatBox';

const ChatPage = () => {
  const [chat, setChat] = useState([]);


  const userInfoString = typeof localStorage !== 'undefined' ? localStorage.getItem("userInfo") : null;
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  
  const token = userInfo?.accessToken;
  

  useEffect(() => {

      (async () => {
        try {
          const response = await axios.get('https://chat-backend-vzo7.onrender.com/api/chats', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setChat(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    
  }, []); 

  return (
    <div className='chat' style={{ width: "100%", padding: "5px" }}>
      {token && <SideDrawer />}
      <Box className='box' d="flex" justifyContent='space-between'>
        {token && <MyChat />}
        {token && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;

