import React from 'react';

const Buyers = ({ buyer }) => {
    const { name, image, details } = buyer;
    return (
        

<a href="#" className="flex flex-col pt-6 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="lg:rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 md:rounded-full sm:rounded-none mt-4 " src={image} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details.length > 200? details.slice(0, 200) + ' ...' : details}</p>
    </div>
</a>




    );
};

export default Buyers;