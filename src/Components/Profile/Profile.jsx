import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
    const{user} = use(AuthContext)
    console.log(user);
    
    return (
        <div className='text-center'>
            <h1>This your profile!</h1>
            <h3>{user && user.email}</h3>
        </div>
    );
};

export default Profile;