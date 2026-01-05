import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import LatestBooksSection from '../components/LatestBooksSection';
import Coverage from '../components/Coverage';
import Banner from '../components/Banner';
import Slider1 from '../components/Sliders/Slider1';
import WhyChoose from '../components/WhyChoose';

const MainLayout = () => {
    return (

        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            
           <div className='flex-1'>
             <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
        </div>

        
    );
};

export default MainLayout;