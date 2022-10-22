import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useFirebase from './../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/products">Products</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/register">Register</Link>
                <span style={{color:"white" ,marginRight:"10px"}}>{user?.displayName && user.displayName}</span>
                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>sign out</button>
                        :
                        <Link to="/login">Login</Link>

                }
            </nav>
        </div>
    );
};

export default Header;