import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
    const [chat, setChat] = useState([]);
    useEffect(()=> {
    (async ()=> {
        try{
            const response = await axios.get("/api/chats");
            console.log(response.data);
            setChat(response.data);
        } catch (error) {
            console.log(error);
        }
    })()
    }, []);
  return (
    <div>{chat.map((item)=> {
        return(
            <div key={item._id}>
                 <div>{item.users.map((user, index)=> {
                   return(
                    <div key={index}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                   )
                 })}</div>
            </div>
           
        )
   
    })}</div>
  )
}

export default ChatPage