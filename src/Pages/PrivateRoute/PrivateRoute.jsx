import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const PrivateRoute = ({children}) => {
const location = useLocation()
const {user, loading} = useContext(authContext);

if(loading){
    return <span className="loading loading-spinner text-error"></span>
}

if(user){
    return children
}
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;