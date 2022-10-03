import React from 'react';
import Footer from '../Shared/Footer';
import Advertise from './Advertise';
import Appointment from './Appointment';

import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Advertise />
            <Appointment />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;