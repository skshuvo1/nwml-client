import React from 'react';
import Navber from '../../../Shared/Navber/Navber';
import img from '../../../../assets/noman16.jpg'
import Machine from './Machine';

const Toyota = () => {
    return (
        <div>
            <div className='sticky'>
            <Navber></Navber>
            </div>
            <h2 className=' font-bold text-center mb-8 pt-8 text-2xl'>Toyota <span className='text-red-500'>Airjet</span> </h2>
            <div className='flex flex-col lg:flex-row m-8 gap-8 mt-8 justify-center'>
                <img className='w-full lg:w-2/3' src={img} alt="" />
                <div className='w-full lg:w-1/3 lg:mt-24'>
                    <h2 className='text-center text-xl my-3 font-bold text-red-500 '>Toyota</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae nulla quas expedita iusto magni, id totam a aut dignissimos blanditiis vel illum nostrum libero asperiores maxime dolorem ad recusandae? Nihil excepturi consequatur est maxime consequuntur libero exercitationem! Adipisci corporis, ea, aperiam voluptatem minima eum molestias corrupti praesentium nam distinctio et?</p>
                </div>
            </div>
            <Machine></Machine>
        </div>
    );
};

export default Toyota;