import React from 'react';
import img1 from '../../../assets/mission.jfif'
import img2 from '../../../assets/vision2.jfif'
import img3 from '../../../assets/value1.webp'
import Products from '../Products/Products';

const Mission = () => {
    return (
        <div>
            <div className='bg-pink-50 py-3 lg:m-12 rounded'>
             <h2 className='font-bold text-center text-2xl my-8 py-3'>Mission & <span className='text-red-500'> Vision</span></h2>
 <div>
               
<a href="#" className="flex flex-col items-center lg:h-64 mb-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-700 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full lg:h-full lg:py-4  md:h-full md:py-8 md:w-96 lg:w-1/3 md:rounded" src={img1} alt="" />
    <div className="flex flex-col justify-between leading-normal ms-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">Our Mission</h5>
        <p className="mb-3 font-normal  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate eum hic tempore ducimus ipsum quas et facere iste doloribus, maxime in ad laboriosam aut nostrum iure temporibus expedita nemo!</p>
    </div>
</a>

<a href="#" className="flex flex-col-reverse lg:h-64 lg:justify-between items-center mb-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-700 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="flex flex-col justify-between leading-normal mx-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">Our Vision</h5>
        <p className="mb-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate eum hic tempore ducimus ipsum quas et facere iste doloribus, maxime in ad laboriosam aut nostrum iure temporibus expedita nemo!</p>
    </div>
    <img className="object-cover w-full md:h-full lg:h-full lg:py-4 md:w-96 md:py-8 lg:w-1/3 md:rounded" src={img2} alt="" />
    
</a>

<a href="#" className="flex flex-col items-center lg:h-64 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-full hover:bg-gray-700 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full lg:h-full lg:py-4  md:h-full md:py-8 md:w-96 lg:w-1/3 md:rounded" src={img3} alt="" />
    <div className="flex flex-col justify-between leading-normal ms-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">Our Value</h5>
        <p className="mb-3 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate eum hic tempore ducimus ipsum quas et facere iste doloribus, maxime in ad laboriosam aut nostrum iure temporibus expedita nemo!</p>
    </div>
</a>

 </div>
        </div>
        <div>
            
 <Products></Products>
        </div>
        </div>
    );
};

export default Mission;