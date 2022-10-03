import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import UseAdmin from '../hooks/UseAdmin';
import Loading from '../Pages/Shared/Loading';

const RequireAdmin = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [admin,adminLoadig] = UseAdmin(user)
    const location = useLocation()
    if(loading  || adminLoadig ){
        return <Loading />
    }

        if(!user  || !admin){
            signOut(auth)
            return <Navigate to ="/login" state ={{from:location }} replace></Navigate>
        }
        return children;
            
 
};

export default RequireAdmin;