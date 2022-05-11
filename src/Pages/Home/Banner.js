import React from 'react';
import heros from '../../img/hero.jpg';


const Banner = () => {
    return (
        
        <div class="hero min-h-screen">
            <div class="hero-content flex-col md:flex-row-reverse lg:flex-row-reverse ">
                <img src={heros} class="max-w-sm3  rounded-lg shadow-2xl"/>
                <div>
                <h1 class="text-5xl font-bold">Achieve Your Desired Perfect Smile</h1>
                <p class="py-6">A full range of cosmetic dentistry treatment to improve your smile</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;