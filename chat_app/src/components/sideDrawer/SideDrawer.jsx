import { Box, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton
} from "@chakra-ui/modal";

import { Tooltip } from "@chakra-ui/tooltip";
import { Input } from "@chakra-ui/input";
import {ChevronDownIcon} from '@chakra-ui/icons'
import { Avatar } from "@chakra-ui/avatar";
import { Spinner } from "@chakra-ui/spinner";
import { useToast } from "@chakra-ui/toast";
import React, { useState } from 'react'
import "./SideDrawer.css"
import { useChat} from '../context/chatContext'
import ProfileModal from '../Modals/ProfileModal'
import axios from 'axios'
import ChatSkeleton from '../skeletalComponents/ChatSkeletal'
import UserList from '../userList/UserList'
// import { MessageState } from "../context/MessageProvider";

const SideDrawer = () => {
    const {chatDispatch, selectedChat, user, setChats ,chats, loadingChat, profileModal, search, searchResult} = useChat();
    // const [, setSelectedChat, chats, setChats] = MessageState();
   const [loading, setLoading] = useState(false);
  const userInfoString = typeof localStorage !== 'undefined' ? localStorage.getItem("userInfo") : null;
  const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
  const token = userInfo?.accessToken;
  const toast = useToast();
  const userName = userInfo?.rest?.userName;
  const userImage =  userInfo?.rest?.pic;
const { isOpen, onOpen, onClose } = useDisclosure();
       const btnRef = React.useRef()
     

       const handleProfileClick = ()=> {
        chatDispatch({
            type: "TOGGLE_PROFILE_MODAL",
           })
        }
            
        const handleSearch = (e) => {
            chatDispatch({
                type: "HANDLE_SEARCH_BTN",
                payload: e.target.value
              })
        }
        
        const handleContactSearch = async ()=> {
             if(!search){
                toast({
                    title: "Nothing Entered",
                    status: "warning",
                    duration: 5000,
                    position: "top-left",
                    isClosable: true
                });
                return;
             }
                    try {
                        setLoading(true);
                        let config = {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        };
                        const {data} = await axios.get(`https://chat-backend-vzo7.onrender.com/api/user?search=${search}`,config);
                        setLoading(false);
                        chatDispatch({
                            type: "CONTACT_SEARCH",
                            payload: data,
                           })
                                  
                    } catch (error) {
                        toast({
                            title: "Error Occured",
                            description: "Faild to load Search Results",
                            duration: 5000,
                            position: "bottom-left",
                            status: "error"
                        })
                    }
                    
            }
           
        const accessChat = async(userId)=> {
         try {
            chatDispatch({
                type: "LOADING_CHAT"
            })
            const config = {
                headers: {
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
            const {data} = await axios.post(`https://chat-backend-vzo7.onrender.com/api/chat`, {userId}, config);
            if(!chats.find((c)=> c._id === data._id))
           
              chatDispatch({
                type: "SETTING_CHAT_DATA",
                payload: data
              })
              chatDispatch({
                type: "CHAT_SELECTION",
                payload: data
              })
        chatDispatch({
            type: "LOADING_CHAT"
        })
            onClose();
         } catch (error) {
            toast({
                title: "Error fetching the chat",
                description: error.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
              });
         }
        }
        
  return (
    <div className='navbar'>
     <div className='searchBar' ref={btnRef} >
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end" >
            <Button variant="ghost" onClick={onOpen}>
            <span className="material-icons-outlined">
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
    <span className="material-icons-outlined">
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
       <MenuItem onClick={handleProfileClick}> My Profile</MenuItem> 
       <MenuDivider></MenuDivider>
       <MenuItem>Logout </MenuItem>
       </MenuList>
   {
    profileModal && <ProfileModal userName={userName}  userImage={userImage}/>

   }
</Menu>
</div>
<div>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Contacts</DrawerHeader>

          <DrawerBody className='drawer-search'>
            <Box d='flex' className='search-bar'>
            <Input placeholder='Type here...' value={search}   
              onChange={(e)=> handleSearch(e)}
              />
            <Button onClick={handleContactSearch}>Go</Button>
            </Box>
         
            
             {
                loading ? <ChatSkeleton/> : (
                  
                   searchResult && searchResult?.map((user)=> (<UserList
                         user={user}
                          key={user._id} 
                          handleFunction = {()=> accessChat(user._id)} 
                          />) )
                )
            } 
         
           {loadingChat && <Spinner ml="auto" d="flex" />}
         
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
</div>
    </div>
  )
}

export default SideDrawer



//need to fix token