import React from 'react';
import Banner from './Banner';
import HomeAppoinment from './HomeAppoinment';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HomeAppoinment></HomeAppoinment>
        </div>
    );
};

export default Home;