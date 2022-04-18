import React ,{useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail ,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.int';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import './Login.css'
;
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
    const handleLogin = event => {
      event.preventDefault()
      const email = emailRef.current.value;
      const password = passwordRef.current.value
      console.log(email, password)
      signInWithEmailAndPassword(email, password)
    }
    const NavigateSigup = event => {
      navigate('/sigup')
    }
  
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(auth );

    const ResetPassword = async () => {
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast('sent email')
      }
      else{
        toast('please enter your email')
      }
    }

    return (
      <div className='container w-50 mx-auto login'>
        <h1 className='text-primary text-center mt-2'> Login </h1>
  
        <Form onSubmit={handleLogin}>
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
        <p>Forget Password?<button onClick={ResetPassword} className='text-primary  btn   '>Reset password</button></p>
       
         <GoogleLogin></GoogleLogin>  
         <ToastContainer>

     </ToastContainer>

      </div>
    );
};

export default Login;