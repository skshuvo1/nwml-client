import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ToyotaBrief = () => {
    return (
        <div className='m-3 p-2'>
            <h2 className=' font-bold text-center mb-8 pt-8 text-2xl'>Project <span className='text-red-500'>Brief</span> </h2>
<div>
    <h2><p className='font-bold'>Toyota Airjet:</p> <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolorem, temporibus quia, deleniti saepe est nobis iure id aut nulla totam minus, quis laboriosam pariatur fugiat quae consequuntur odio? Dignissimos cumque, sunt ab, eius molestias hic natus ex illum, assumenda aut vero accusamus placeat nobis nesciunt voluptatibus omnis reprehenderit!</span></h2>
</div>
<h2 className='font-semibold mt-6 mb-3'>Details:</h2>
<div className='ms-4'>
    <ul className='list-disc'>
        <li className=''>Total Manpower: 520</li>
        <li>Manpower/Shift: 60</li>
        <li>Total Shift: 03</li>
        <li>Total Machine:128</li>
        <li>Total Mechanics: 50</li>
        <li>Total Electrician: 40</li>
    </ul>
</div>
<div className='mt-6 text-center'>
   <Link to='/production'> <button className="btn btn-outline btn-secondary my-8">See All <FaArrowRight></FaArrowRight></button></Link>
</div>
        </div>
    );
};

export default ToyotaBrief;