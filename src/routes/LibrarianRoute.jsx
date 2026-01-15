import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../elements/Loading';
import useRole from '../hooks/useRole';
import ForbiddenPage from './../elements/ForbiddenPage';

const LibrarianRoute = ({children}) => {
    const {loading} = useAuth()
    const {role} = useRole()
    if(loading){
        return <Loading></Loading>
    }

    if( role === "admin" || role === "librarian"){
       return children  
    }

   
    return <ForbiddenPage></ForbiddenPage>
};

export default LibrarianRoute;