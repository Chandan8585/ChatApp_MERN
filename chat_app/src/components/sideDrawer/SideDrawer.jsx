import { Box, Text, Tooltip,Button, Menu, MenuButton, Wrap, WrapItem, Avatar, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import React from 'react'
import "./SideDrawer.css"
import { useChat, profileModal } from '../context/chatContext'
import ProfileModal from '../Modals/ProfileModal'
const SideDrawer = () => {
    const userName = localStorage.getItem("userData");
    const userImage = localStorage.getItem('userPic');
    console.log("user",userName);
       const {chatDispatch, profileModal} = useChat();
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
        <Avatar
        size="sm"
         name={userName}
         src={userImage}
         /> 
        </WrapItem>
     </Wrap>
    </MenuButton>
    <MenuList>
       <MenuItem onClick={chatDispatch({
        type: "OPEN_PROFILE_MODAL",
       })}> My Profile</MenuItem> 
       <MenuDivider></MenuDivider>
       <MenuItem>Logout </MenuItem>
       </MenuList>
   {
    profileModal && <ProfileModal/>
   }
</Menu>
</div>
    </div>
  )
}

export default SideDrawer