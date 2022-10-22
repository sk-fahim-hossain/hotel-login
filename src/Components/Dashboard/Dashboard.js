import React from 'react';
import app from './../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const  auth = getAuth(app)
const Dashboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>{user?.display}</h1>
            <h4>{user?.email}</h4>
        </div>
    );
};

export default Dashboard;