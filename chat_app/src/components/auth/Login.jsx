import React, { useState } from 'react'
import "./auth.css"
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios'
import { useChat } from '../context/chatContext';

const initalValues = {
    email: "",
    password: "" 
}
const validationSchema = yup.object({
    email: yup.string().email("Invalid email address").required("Email is required"),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).+$/, 'Password must include atleast 1 upperCase 1 lowerCase and any spcial Character ex: Abcd@1234').required('Password is required')      
})
const Login = () => {
    const {user, chatDispatch} = useChat();
    const navigate = useNavigate();
    const [serverError, setServerError] = useState(""); 
    const handleSubmit = async (values) => {
     
        let {email, password} = values;
        try {
            const response = await axios.post("https://chat-backend-vzo7.onrender.com/api/auth/login", values);
            const token = response.data.accessToken ;
           const userData = response.data.rest.userName;
           const userPic = response.data.rest.pic;
            if(token){
                navigate("/chats")
            }
            localStorage.setItem("token", token);
            localStorage.setItem("userData", userData );
            localStorage.setItem("userPic", userPic);
        } catch (error) {
            console.error(error);
            setServerError(error.message);
        }
    };
    
       
    
  return (
    <div className='container'>
        <h2 className='auth-title'>Login</h2>
        <Formik 
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
            <Form>      
                 <div className='form-container'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <Field type="text" className= "form-input-log" name="email" placeholder="Enter your First Name"/>
                    <ErrorMessage name='email' component='div' className='error-message'/>
                 </div>
                 <div className='form-container'> 
            <label htmlFor='password' className='form-label'>Password</label>
            <Field name="password" type="password" className="form-input-log" placeholder="Enter your password"/>
            <ErrorMessage name='password' component='div' className='error-message'/>
                 </div>
                 <div className='submit-btn'>
                 <button type='submit' className='btn-margin'>Login</button>
                 </div>
                 <div className='btn'>
                 <button type='' className='btn-margin' >Login with Test Credentials</button>
                 </div>
                 <div className='login'> 
                 <p>{serverError}</p>
          <p>Do not have any account <Link to="/SignUp"><span className='span'>Sign Up</span></Link> here</p>
    </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Login


