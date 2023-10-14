import React from 'react'
import "./Home.css"
import Login from '../../components/auth/Login';

const initalValues = {
    email: "",
    password: "" 
}

const HomePage = () => {
  return (
    <div>
        <Login/>
    </div>
  )
}

export default HomePage

