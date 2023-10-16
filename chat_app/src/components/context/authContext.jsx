import React, { createContext, useReducer, useContext } from 'react';
import { authReducer } from '../reducers/authReducer';

const initalValues = {
    userName: "",
    email:"",
    password:"",
    confirmPassword:"",
    image:""
}
const AuthContext = createContext(initalValues);

const AuthProvider = ({children})=>{
    const [{userName, email, password, confirmPassword, image}, authDispatch] = useReducer(authReducer, initalValues);
    return(
        <AuthContext.Provider value={{userName, email, password, confirmPassword, image, authDispatch}}>
        {children}
      </AuthContext.Provider>
    )
      
} 

const useAuth = () => useContext(AuthContext);
export {useAuth, AuthProvider}; 