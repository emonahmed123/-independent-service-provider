import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate =useNavigate()
    const NavigateSigup= ()=>{
        navigate('/sigup')
    }
  return (
      <div className= 'container w-50 mx-auto'>
    
      <h1 className='text-primary text-center mt-2'> Login </h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary  w-50 mx-auto d-block" type="submit">
          Login
        </Button>
      </Form>
      <p className='mt-2'>Create an account? <Link to="/sigup" className='text-danger pe-auto text-decoration-none ' onClick={NavigateSigup}>SingUp </Link> </p>
      </div>


     
    );
};

export default Login;