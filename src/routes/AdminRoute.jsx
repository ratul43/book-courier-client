import React from 'react';
import useAuth from '../hooks/useAuth';
import Loading from '../elements/Loading';
import useRole from '../hooks/useRole';
import ForbiddenPage from './../elements/ForbiddenPage';

const AdminRoute = ({children}) => {
    const {loading} = useAuth()
    const {role} = useRole()
    if(loading){
        return <Loading></Loading>
    }

    if(role !== "admin"){
        return <ForbiddenPage></ForbiddenPage>
    }

    return children
};

export default AdminRoute;