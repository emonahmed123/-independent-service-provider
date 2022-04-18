import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
           <h1 className='text-center  pb-2  text-primary' > Wedding Photograper</h1>
        
            <Banner></Banner>
            <Service></Service>
        </div>
    );
};

export default Home;