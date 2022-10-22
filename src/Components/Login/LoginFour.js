import React from 'react';
import useFirebase from './../../hooks/useFirebase';
import app from './../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Link } from 'react-router-dom';



const auth = getAuth(app)

const LoginFour = () => {
    const {signInWithGoogle} = useFirebase();

    const [user] = useAuthState(auth)
    if(user){
      return (<Navigate to="/dashboard"></Navigate>)
    }
    return (
        <div>
            <h2>Please Login</h2>
            <div style={{margin:'20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form action="">
            <input type="email" name="" id="" placeholder="Enter Your Email" />
               <br />
               <input type="password" name="" id="" placeholder="Enter Your Password" />
               <br />
               <input type="submit" value="Login" />

               <p>Don't have any account? <Link to="/register">Create an account</Link> </p>
            </form>
        </div>
    );
};

export default LoginFour;