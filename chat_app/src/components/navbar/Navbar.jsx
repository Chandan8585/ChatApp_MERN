import React from 'react'

import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

    <header className="heading d-flex align-center">
    <div
        className="form-container d-flex align-center cursor-pointer shadow" >
        <input type="text" placeholder='search-user'/>
        <span className="search material-icons-outlined">search</span>
      </div>
      
      <Link to="/" >
      <h1 className="heading-1">
        Nomad_nest
    </h1>
    {/* <img src="" alt="" className='app-logo'/> */}
      </Link>

      
     
    
     <button
  className="button btn-wishlist absolute d-flex align-center wishlist-btn"
      >
  <span class="material-icons-outlined wishlist cursor">
favorite_border
</span>
<span className='number-of-items'>

</span>
   </button>
     

    <nav className="d-flex align-center gap-large" >
      <div className="nav d-flex align-center cursor-pointer">
        <span className="material-icons-outlined profile-option menu" >
          menu
        </span>
      
        <span className="material-icons-outlined profile-option person" >
          person_2
        </span>
      </div>
    </nav>
         {/* {
          isShowModalOpen && <AuthModal/>
         }
         {
          isUserModalOpen && <UserModal/>
         } */}
  </header>

  </div>
  )
}

export default Navbar