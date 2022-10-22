import React from 'react';
import { getAuth } from 'firebase/auth';
import app from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';




const auth = getAuth(app)


const Register = () => {
    const [user] = useAuthState(auth)
    if(user){
        return (<Navigate to="/dashboard"></Navigate>)
      }
    return (
        <div>
            <h2>Please register now</h2>
            <form action="">
               <input type="text" name="" id="" placeholder="Enter Your Name" />
               <br />
               <input type="email" name="" id="" placeholder="Enter Your Email" />
               <br />
               <input type="password" name="" id="" placeholder="Enter Your Password" />
               <br />
               <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;