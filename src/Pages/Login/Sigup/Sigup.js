import React from 'react';
import './Sigup.css'
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword,} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.int'

const Sigup = () => {
  
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification : true});
      
        const navigate =useNavigate()
       const NavigateLogin= ()=>{
           navigate('/login')
       }

         if(user){
             navigate('/home')
        }
    
       const handleSigup =  async  event =>{
           event.preventDefault()
           const name =event.target.name.value;
           const email =event.target.email.value
           const password =event.target.password.value
           console.log(event.target.email)
     
      await  createUserWithEmailAndPassword(email,password)
         
      navigate('/home') 
       }
        return (
      
         
                <div className='register-form sigup'>
                <h2  className='text-primary text-center mt-2' style={{textAlign: 'center'}}>Please Register</h2>
                <form onSubmit={handleSigup}>
                    <input type="text" name="name" id="" placeholder='Your Name' required/>
                    
                    <input type="email" name="email" id="" placeholder='Email Address' required/>
                    
                    <input type="password" name="password" id="" placeholder='Password' required/>
                  
                    <input    className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
                </form>
                <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={NavigateLogin}>Please Login</Link> </p>
  
            </div>
    
        );
    
};

export default Sigup;