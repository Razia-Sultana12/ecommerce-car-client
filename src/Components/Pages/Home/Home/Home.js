import React from 'react';
import Review from '../../DashBoard/NormalUser/Review/Review';
import About from '../About/About';
import Cars from '../Cars/Cars';
import ReviewsUi from '../ReviewsUi/ReviewsUi';
import TopBanner from '../TopBanner/TopBanner';
import Aboutus from '../Aboutus/Aboutus';
import OurService from '../OurService/OurService';
import MyOrders from '../../DashBoard/NormalUser/MyOrders/MyOrders';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
    
            <About></About>
            <OurService></OurService>
            <Cars></Cars>
            <Review></Review>
            <ReviewsUi></ReviewsUi>
           
        </div>
    );
};

export default Home;