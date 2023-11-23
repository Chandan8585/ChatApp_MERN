import React from 'react'
import "./userList.css"
import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
const UserList = ({user , handleFunction}) => {
  return (
    // <div className='user-container'>
    //     <img src={user.pic} alt="" className='user-pic'/>
    //     <h2 className='user-name'>{user.userName}</h2>
    // </div>
    <Box
    onClick={handleFunction}
    cursor="pointer"
    bg="#E8E8E8"
    _hover={{
      background: "#38B2AC",
      color: "white",
    }}
    w="100%"
    d="flex"
    alignItems="center"
    color="black"
    px={3}
    py={2}
    mb={2}
    borderRadius="lg"
  >
    <Avatar
      mr={2}
      size="sm"
      cursor="pointer"
      name={user.name}
      src={user.pic}
    />
    <Box  d="flex">
      <Text>{user.userName}</Text>
      <Text fontSize="xs">
        <b>Email : </b>
        {user.email}
      </Text>
    </Box>
  </Box>
);
}

export default UserList