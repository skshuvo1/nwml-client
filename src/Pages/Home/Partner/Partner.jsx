import React, { useEffect, useState } from 'react';
import Buyers from './Buyers';
import { FaArrowRight } from 'react-icons/fa6';
import Marquee from "react-fast-marquee";

const Partner = () => {
    const [buyers, setBuyers] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5000/buyer`)
            .then(res => res.json())
            .then(data => setBuyers(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            <div className=' text-center'>
                <h2 className='text-2xl font-bold my-4 py-4'>Certified <span className='text-red-500'>Partners</span></h2>
                <p className=' m-auto  lg:w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae libero nobis assumenda cupiditate sapiente labore quos! Itaque quae totam quos aut sapiente omnis magni, quia nobis saepe corrupti laborum facilis?</p>
            </div>
           <Marquee  speed={50}>
           <div className='flex justify-center gap-8 lg:gap-12 me-12  items-center my-12'>
            {
                buyers.map(buyer => <Buyers
                    key={buyer.id}
                    buyer={buyer}
                >

                </Buyers>)
            }
            </div>
           </Marquee>
           
        </div>
    );
};

export default Partner;