import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            I'm auth layout 
            <div className='flex-1'>
             <Outlet></Outlet>
           </div>
        </div>
    );
};

export default AuthLayout;