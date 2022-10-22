import React from 'react';
import useFirebase from './../../hooks/useFirebase';

const Orders = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>this is orders page</h2>
            <p>user is : {user?  user.displayName : 'Nobody'}</p>
        </div>
    );
};

export default Orders;