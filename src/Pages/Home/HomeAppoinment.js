import React from 'react';
import doctor from '../../img/doctor.png';
import appointment from '../../img/appointment.png';

const HomeAppoinment = () => {
    return (
        <section className='flex justify-center items-center my-20' style={{background: `url(${appointment})`}}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>'
            <div className='flex-1'>
                <h3 className='text-xl text-secondary mb-6'>Appointment</h3>
                <h2 className='text-3xl text-white mb-6'>Make an appointment Today</h2>
                <p className='mb-6 text-white mr-8'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-secondary">Get Started</button>
            </div>
        </section>
    );
};

export default HomeAppoinment;