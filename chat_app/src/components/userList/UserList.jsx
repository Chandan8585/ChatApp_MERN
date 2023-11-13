import React from 'react'

const UserList = ({user}) => {
  return (
    <div className='user-container'>
        <img src={user.pic} alt="" />
        <h2>{user.userName}</h2>
    </div>
  )
}

export default UserList