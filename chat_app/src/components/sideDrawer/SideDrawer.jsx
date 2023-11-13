import { Box, Text, Tooltip,Button, Menu, MenuButton, Wrap, WrapItem, Avatar, MenuList, MenuItem, MenuDivider,    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Input,
    useToast, } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
import React, { useState } from 'react'
import "./SideDrawer.css"
import { useChat, profileModal } from '../context/chatContext'
import ProfileModal from '../Modals/ProfileModal'
import {

  } from '@chakra-ui/react'
import axios from 'axios'
import ChatSkeleton from '../skeletalComponents/ChatSkeletal'
import UserList from '../userList/UserList'
const SideDrawer = () => {
    const [search, setSearch] = useState("");
   const [searchResult, setSearchResult] = useState([]);
   const [loading, setLoading] = useState(false);
  const [error, seterror] = useState();
  const token = localStorage.getItem("token");
const toast = useToast();
    const userName = localStorage.getItem("userData");
    const userImage = localStorage.getItem('userPic');
  
       const {chatDispatch, profileModal, user } = useChat();
       const { isOpen, onOpen, onClose } = useDisclosure();
       const btnRef = React.useRef()
     

       const handleProfileClick = ()=> {
        chatDispatch({
            type: "TOGGLE_PROFILE_MODAL",
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
                })
             }
                    try {
                        setLoading(true);
                        let config = {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        };
                        const data = await axios.get(`https://chat-backend-vzo7.onrender.com/api/user?search=${search}`,config);
                         
                        setSearchResult(data);
                        setLoading(false);
                      
                    } catch (error) {
                        toast({
                            title: "Error Occured",
                            description: "Faild to load Search Results",
                            duration: 5000,
                            position: "top-left",
                            status: "Error"
                        })
                    }
                    
            }
           
        const accessChat = ({userId})=> {

        }
        
  return (
    <div className='navbar'>
     <div className='searchBar' ref={btnRef} onClick={onOpen}>
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end" >
            <Button variant="ghost">
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
    profileModal && <ProfileModal userName={userName} userImage={userImage} />
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
              onChange={(e)=> setSearch(e.target.value)}/>
            <Button onClick={handleContactSearch}>Go</Button>
            </Box>
         
            
            {
                loading ? <ChatSkeleton/> : (
                    // console.log("searchResult",searchResult)
                   searchResult && searchResult.map((user)=> (<UserList
                         user={user}
                          key={user._id} 
                          handleFunction = {()=> accessChat(user._id)} 
                          />) )
                )
            }
           
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    
</div>
    </div>
  )
}

export default SideDrawer