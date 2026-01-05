import React from 'react';
import Banner from '../../components/Banner';
import Slider1 from '../../components/Sliders/Slider1';
import LatestBooksSection from '../../components/LatestBooksSection';
import Coverage from '../../components/Coverage';
import WhyChoose from '../../components/WhyChoose';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Slider1></Slider1>
            <LatestBooksSection></LatestBooksSection>
            <Coverage></Coverage>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default HomePage;