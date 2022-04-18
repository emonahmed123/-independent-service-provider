import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRef } from 'react';
import './Cheakout.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const Cheakout = () => {
   
    const emailRef = useRef(' ')

   
   
   
    const handleBooking = event => {
        event.preventDefault()
        const email = emailRef.current.value;
     
        console.log(email)
         if(email){
             toast('Confirm booking')
         }
      }
   
    return (
        <div className='container w-50 mx-auto   cheak'>
            <h1 className='text-center'>Cheakout</h1>
            <Form onSubmit={handleBooking}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={emailRef} type="text" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" placeholder="number" required />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="Address" placeholder="Address" required />
          </Form.Group>
          <Button variant="dark w-50 mx-auto d-block" type="submit">
            Booking
          </Button>
        </Form>
        <ToastContainer>

</ToastContainer>
        </div>
    );
};

export default Cheakout;