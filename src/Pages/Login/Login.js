import React ,{useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.int';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import './Login.css'
;

const Login = () => {
    const emailRef = useRef(' ')
    const passwordRef = useRef(' ')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location?.state?.from?.pathname || "/cheakout";
    let errorElement;
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    
   
    if (user) {
      //  navigate('/home')
      navigate(from,{ replace: true})
    }
    if (error) {
      errorElement = <p className='text-danger'>Error: {error?.message} </p>
  
    }
    const handleSubmit = event => {
      event.preventDefault()
      const email = emailRef.current.value;
      const password = passwordRef.current.value
      console.log(email, password)
      signInWithEmailAndPassword(email, password)
    }
    const NavigateSigup = event => {
      navigate('/sigup')
    }
  
    return (
      <div className='container w-50 mx-auto login'>
        <h1 className='text-primary text-center mt-2'> Login </h1>
  
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary  w-50 mx-auto d-block" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p> Do you new? <button onClick={NavigateSigup} className='text-primary  btn'>Please Sigup</button></p>

         <GoogleLogin></GoogleLogin>  
    
      </div>
    );
};

export default Login;