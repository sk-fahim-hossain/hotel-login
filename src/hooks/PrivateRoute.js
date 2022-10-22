import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useFirebase from './useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from './../firebase.init';




const auth = getAuth(app)

export default function PrivateRoute(){
   
    const {loginUser } = useFirebase();

    const [user] = useAuthState(auth)
   
    

   

   
    return user ?  <Outlet></Outlet> : <Navigate to="/login" />
}