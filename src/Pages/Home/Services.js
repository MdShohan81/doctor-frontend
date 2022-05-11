import React from 'react';
import ServiceCard from './ServiceCard';
import whitening from '../../img/whitening.png'
import cavity from '../../img/cavity.png'
import fluoride from '../../img/fluoride.png'

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        },
        {
            _id: 2,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity

        },
        {
            _id: 3,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        }
        
    ]
    return (
        <div className='my-20'>
           <h4 className='text-secondary text-lg text-center font-bold'>Our Service</h4>
           <h3 className='text-2xl text-center'>Service We Provide</h3>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-8 md:px-12 lg:px-12 my-12'>
           {
               services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
           }
           </div>
        </div>
    );
};

export default Services;