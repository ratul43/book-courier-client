import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../elements/Logo';

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'> 
            <div className='flex flex-col min-h-screen'>
            <Logo></Logo>
            <div className='flex-1'>
             <Outlet></Outlet>
           </div>
        </div>
        </div>
        
    );
};

export default AuthLayout;