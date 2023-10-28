import React from 'react';
import img1 from '../../../assets/person6.jpg'
import img2 from '../../../assets/person7.jpg'
import img3 from '../../../assets/person8.jpg'
import img4 from '../../../assets/person9.jpg'
import { FaArrowRight } from "react-icons/fa6";
import Projects from '../Project/Projects';

const Management = () => {
    return (
        <div>
            <div className=' bg-pink-50'>

<h2 className=' font-bold text-center mb-8 pt-8 text-2xl'>Our <span className='text-red-500'> Management</span> Team</h2>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
    <div className="card max-w-sm mx-auto  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
            <img src={img1} alt="Shoes" className="h-36 rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Chairman,Noman Group</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, autem.</p>
        </div>
    </div>
    <div className="card max-w-sm mx-auto  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
            <img src={img2} alt="Shoes" className="h-36 rounded-full w-48" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">ED, NWML</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nulla!</p>
        </div>
    </div>
    <div className="card max-w-sm mx-auto bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
            <img src={img3} alt="Shoes" className="h-36 rounded-full w-48" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">DGM, NWML</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, excepturi?</p>
        </div>
    </div>
    <div className="card max-w-sm mx-auto  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
            <img src={img4} alt="Shoes" className="h-36 rounded-full w-48" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title"> Admin Manager</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, atque.</p>

        </div>
    </div>
</div>


<div className='mt-6 text-center'>
    <button className="btn btn-outline btn-secondary my-8">See All <FaArrowRight></FaArrowRight></button>
</div>

</div>
<div>
    <Projects></Projects>
</div>
        </div>
    );
};

export default Management;