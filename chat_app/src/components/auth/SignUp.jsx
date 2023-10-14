import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"
import "./auth.css"
import { Link } from 'react-router-dom'
const initialValues = {
    name:"",
    mobile:"",
    email: "",
    password: "",
    confirmPassword: ""
}

const validationSchema = yup.object({
 name: yup.string().required("Username is required"),
 mobile: yup.string().matches(/^[0-9]{10}$/, 'Invalid Number').required("Mobile Number is required"),
 email: yup.string().email("Invalid email Address").required("Email ia required"),
 password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).+$/, 'Password must include atleast 1 upperCase 1 lowerCase and any special Characters ex:- Abcd@1234').required('Password is required'),
 confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Password not matching").required("Confirm password is required")
})

const SignUp = ()=> {
    return(
        <div className='container'>
            <h2 className='auth-title'>Sign Up</h2>
        <Formik 
        initialValues={initialValues}
        validationSchema={validationSchema}
      
        >
        <Form>
            <div className='form-container'>
                <label htmlFor='userName' className='form-label'>Name</label>
                <Field name="userName" type="text" className='form-input-log' placeholder= "Enter your first Name"/>
                <ErrorMessage name='userName' component='div' className='error-message'/>
            </div>
            <div className='form-container'>
                <label htmlFor='mobile' className='form-label'>Mobile Number</label>
                <Field name='mobile' type="tel" className="form-input-log" placeholder="Enter your mobile number"/>
                <ErrorMessage name='mobile' component='div' className='error-message'/>
            </div>
            <div className='form-container'>
                <label htmlFor='email' className='form-label'>Email ID</label>
                <Field name='email' type='email' className='form-input-log' placeholder="Enter your Email Address"/>
                <ErrorMessage name='email' component='div' className='error-message' />
            </div>
            <div className='form-container'>
                <label htmlFor='password' className='form-label'>Password</label>
                <Field name='password' type='password' className='form-input-log' placeholder="****"/>
                <ErrorMessage name='password' component='div' className='error-message' />
            </div>
            <div className='form-container'>
            <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                <Field name='confirmPassword' type='password' className='form-input-log' placeholder="****"/>
                <ErrorMessage name='confirmPassword' component='div' className='error-message' />
            </div>
            <div className='submit-btn'>
                 <button type='submit' className='btn-margin'>Login with Test Credentials</button>
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