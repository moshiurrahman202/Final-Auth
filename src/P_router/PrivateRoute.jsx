import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    const location = useLocation()
    console.log(location);
    
    if(loading){
        return <div className='text-center'><span className="loading loading-spinner text-secondary"></span></div>
    }
    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;