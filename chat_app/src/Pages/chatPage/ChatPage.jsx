import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useChat } from '../../components/context/chatContext';
const ChatPage = () => {
    const [chat, setChat] = useState([]);
    const {user} = useChat();
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
    <div>

    </div>
  )
}

export default ChatPage