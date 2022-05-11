import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../img/icons/clock.svg'
import marker from '../../img/icons/marker.svg'
import phone from '../../img/icons/phone.svg'

const Info = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-8 md:px-12 lg:px-12 my-10">
            <InfoCard cardTitle='Opening Hours' bgclass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='Visit our location' bgclass='bg-neutral' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact us now' bgclass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;