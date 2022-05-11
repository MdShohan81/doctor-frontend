import React from 'react';

const InfoCard = ({img, bgclass,cardTitle}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl text-white ${bgclass}`}>
            <figure className='ml-4'><img src={img} alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;