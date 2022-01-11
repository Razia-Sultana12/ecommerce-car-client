import React from 'react';

import About from '../About/About';
import Cars from '../Cars/Cars';
import ReviewsUi from '../ReviewsUi/ReviewsUi';
import TopBanner from '../TopBanner/TopBanner';
import Footer from '../Footer/Footer';
import OurService from '../OurService/OurService';



const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <About></About>
            <Cars></Cars>
            <OurService></OurService>
            <ReviewsUi></ReviewsUi>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;