import React, { useEffect, useState } from 'react'
import { useChat } from '../context/chatContext';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import {Box, Stack, Text} from '@chakra-ui/layout';
import { AddIcon } from '@chakra-ui/icons';
import { getSender } from '../../utils/chatHelper';
import ChatSkeleton from '../skeletalComponents/ChatSkeletal';
import "./MyChat.css"
const MyChat = () => {
  const [loggedUser, setLoggedUser] = useState();
  const {chats, selectedChat ,chatDispatch , loadingChat} = useChat();
  const toast = useToast();
 const token = localStorage.getItem("token");

 
  const fetchChats = async()=> {
       try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } =await axios.get("https://chat-backend-vzo7.onrender.com/api/chat", config);
        chatDispatch({
          type: "SETTING_CHAT_DATA",
          payload: data
        })
       
       } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to Load the chats",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
       }
  }

 useEffect(()=>{
  setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
  fetchChats();
 }, [])

  const handleChatSelection = (chat)=> {
    chatDispatch({
      type: "CHAT_SELECTION",
      payload: chat
    })
  }

  return (
    <Box 
    display={{base: selectedChat ? "none" : "flex", md:'flex'}}
    flexDir='column'
    alignItems='center'
    p={3}
    bg='burlywood'
    w={{base:"100%", md:'31%'}}
    borderRadius='lg'
    borderWidth='1px'
    className='mychat-box'
    >
      <Box
      pb={3}
      px={3}
      fontSize={{base: '28px', md:'30px'}}
      display="flex"
      w='100%'
      flexDir='row'
      justifyContent='space-between'
      alignItems='center'
      >
My Chats

<Button display='flex'
 fontSize={{base: '17px', md:'10px' , lg: '17px'}}
 rightIcon={<AddIcon/>}
>
New Group Chat
</Button>
      </Box>
      <Box
      display='flex'
      flexDir='column'
   p={3}
   bg='#F8F8F8'
   w='100%'
   h="100%"
   borderRadius="lg"
   overflowY="hidden"
      >
{ chats ? (
    <Stack overflowY='scroll'>
         {chats.map((chat)=> (
          <Box 
          onClick={()=>handleChatSelection(chat)}
          cursor="pointer"
          bg={selectedChat === chat ? "#38B2AC" : "#E8E8E8"}
          color={selectedChat=== chat ? "white" : "black"}
          px={3}
          py={2}
          borderRadius="lg"
          key={chat._id}
          >
          <Text> 
            {/* { !chat[0].isGroupChat  ? getSender(loggedUser, chat?.users) : chat[0].chatName 
            }  */}
            
       {console.log("groupChat", chat[0]?.users)}

          </Text> 
          {chat.latestMessage && (
          <Text fontSize="xs">
            <b>{chat.latestMessage.sender.name} : </b>
            {chat.latestMessage.content.length > 50
              ? chat.latestMessage.content.substring(0, 51) + "..."
              : chat.latestMessage.content}
          </Text>
        )}
          </Box>
         ))}
    </Stack>
  ): (<ChatSkeleton/>)
  }

      </Box>
    </Box>
  )
}

export default MyChat

