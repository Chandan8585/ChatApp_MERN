import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"
import "./auth.css"

import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const initialValues = {
    userName:"",
    email: "",
    password: "",
    confirmPassword: "",
    pic: ""
}

const validationSchema = yup.object({
    userName: yup.string().required("Username is required"),
 email: yup.string().email("Invalid email Address").required("Email is required"),
 password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).+$/, 'Password must include atleast 1 upperCase 1 lowerCase and any special Characters ex:- Abcd@1234').required('Password is required'),
 confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password not matching").required("Confirm password is required"),
 pic: yup.string()
})

const SignUp = ()=> {
    const [serverError, setServerError] = useState("");
 
   const handleFormSubmit = async(values)=> {
    let {userName, email, password, pic} = values;
    
      console.log({userName, email, password, pic})

       try {
        const response = await axios.post("https://chat-backend-vzo7.onrender.com/api/auth/register", values);
        console.log("signed up");
        console.log(response);
       } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 409) {
            setServerError("User already exists with this email address");
        }
       }
       console.log(serverError);
   }
    return(
        <div className='container'>
            <h2 className='auth-title'>Sign Up</h2>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
       onSubmit={handleFormSubmit}
        >
        <Form>
            <div className='form-container'>
                <label htmlFor='userName' className='form-label'>Name</label>
                <Field name="userName" type="text" className='form-input-log' placeholder= "Enter your first Name" 
                />
                <ErrorMessage name='userName' component='div' className='error-message'/>
            </div>
            <div className='form-container'>
                <label htmlFor='email' className='form-label'>Email ID</label>
                <Field name='email' type='email' className='form-input-log' placeholder="Enter your Email Address"
                />
                <ErrorMessage name='email' component='div' className='error-message' />
            </div>
            <div className='form-container'>
                <label htmlFor='password' className='form-label'>Password</label>
                <Field name='password' type='password' className='form-input-log' placeholder="****"
                />
                <ErrorMessage name='password' component='div' className='error-message' />
            </div>
            <div className='form-container'>
            <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                <Field name='confirmPassword' type='password' className='form-input-log' placeholder="****"
                />
                <ErrorMessage name='confirmPassword' component='div' className='error-message' />
            </div>
            <div className='form-container'>
            <label htmlFor='pic' className='form-label'>Upload Profile pic</label>
                <Field name='pic' type='file' accept="image/*" className='form-input-log' placeholder="upload image"
                 
                />
                <ErrorMessage name='pic' component='div' className='error-message' />
            </div>
            <div className='submit-btn'>
                 <button type='submit' className='btn-margin'>Sign Up</button>
            </div>
            <div className='login'> 
          <p>Already have an account <Link to="/login"><span className='span'>Login</span></Link> here</p>
          </div>
        </Form>
        </Formik>
        </div>
    )
}

export default SignUp;










