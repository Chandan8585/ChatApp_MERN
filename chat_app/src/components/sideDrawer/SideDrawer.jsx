import { Box, Text, Tooltip,Button, Menu, MenuButton, Wrap, WrapItem, Avatar } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import React, { useEffect, useState } from 'react';
import "./SideDrawer.css"
import axios from 'axios';
const SideDrawer = () => {
const [user, setUser] = useState();
    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get('https://chat-backend-vzo7.onrender.com/api/chats');
            console.log(response.data);
            setUser(response.data);
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);
      
  return (
    <div className='navbar'>
     <div className='searchBar'>
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end" >
            <Button variant="ghost">
            <span class="material-icons-outlined">
            search
            </span>
            <Text>User Search</Text>
            </Button>  
        </Tooltip>
     </div>
<div className='app-name'>
<h1>Chat App</h1>
</div>
<div className='menu'>
<Menu>
    <MenuButton p={1} className='notification'>
    <span class="material-icons-outlined">
notifications
</span>
    </MenuButton>
</Menu>
<Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}> 
     <Wrap>
        <WrapItem>
        <Avatar name={user.name}/> 
        </WrapItem>
     </Wrap>
    </MenuButton>

</Menu>
</div>
    </div>
  )
}

export default SideDrawer