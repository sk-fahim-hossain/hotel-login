
import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import app from './../firebase.init';


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState('')
    const [loginUser, setLoginUser] = useState(false)
    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            setUser(user)
            setLoginUser(true)
        })
    },[])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log("sign out successfully")
        })
        .catch(error => {
            console.log(error.message)
        })
    }

   return {
        user,
        signInWithGoogle,
        handleSignOut,
        loginUser,
   };
}

export default useFirebase;