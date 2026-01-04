import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import LatestBooksSection from '../components/LatestBooksSection';
import Coverage from '../components/Coverage';
import Banner from '../components/Banner';

const MainLayout = () => {
    return (

        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <Banner></Banner>
            <LatestBooksSection></LatestBooksSection>
            <Coverage></Coverage>
           <div className='flex-1'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
        </div>

        
    );
};

export default MainLayout;