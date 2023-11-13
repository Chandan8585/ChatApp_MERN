import React from 'react'
import { useChat } from '../context/chatContext'
import "./profileModal.css"
const ProfileModal = ({userName, userImage}) => {
    const {chatDispatch} = useChat();
    const closeProfileModal = ()=> {
        chatDispatch({
            type: "TOGGLE_PROFILE_MODAL",

        })
    }
// const {userName, userImage} = props;
  return (
    <div className='profile-modal'>
        <div>
        <button className='close-btn' onClick={closeProfileModal}><span class="material-icons-outlined">
close
</span></button>
     <h1>My Profile</h1>
        </div>
       
     <div className='user-detail'>
        <h3 className='userName'>Name:- {userName}</h3>
        <img src={userImage} alt={userName} width={250} className='user-image'/>
     </div>
    </div>
  )
}

export default ProfileModal