import React, { useEffect, useState } from 'react';
import Buyers from './Buyers';

const Partner = () => {
    const [buyers, setBuyers] = useState([]);
    console.log(buyers);

    useEffect(() => {
        fetch(`http://localhost:5000/buyer`)
            .then(res => res.json())
            .then(data => setBuyers(data))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            <div className='bg-pink-50 text-center'>
                <h2 className='text-2xl font-bold my-4 py-4'>Certified <span className='text-red-500'>Partners</span></h2>
                <p className=' m-auto  lg:w-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae libero nobis assumenda cupiditate sapiente labore quos! Itaque quae totam quos aut sapiente omnis magni, quia nobis saepe corrupti laborum facilis?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {
                buyers.map(buyer => <Buyers
                    key={buyer.id}
                    buyer={buyer}
                >

                </Buyers>)
            }
            </div>
        </div>
    );
};

export default Partner;