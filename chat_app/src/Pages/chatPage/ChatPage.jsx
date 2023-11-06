import React, { useState } from 'react';
import './chatPage.css';
// import axios from 'axios';
import { useChat } from '../../components/context/chatContext';
import SideDrawer from '../../components/sideDrawer/SideDrawer';
import MyChat from '../../components/myChat/MyChat';
import { Box } from '@chakra-ui/layout';
import ChatBox from '../../components/chatBox/ChatBox';

const ChatPage = () => {
  const [chat, setChat] = useState([]);
//   const { user } = useChat();
  const token = localStorage.getItem('token');
 

  return (
    <div className='chat' style={{width: "100%"}} >
      {token && <SideDrawer />}
      <Box className='box'>
        {token && <MyChat />}
        {token && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
