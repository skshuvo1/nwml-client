import React from 'react';

const Buyers = ({ buyer }) => {
    const {image, } = buyer;
    return (
        

<a href="#" className="flex flex-col justify-center items-center h-36 w-36  hover:shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 ">
    <img className=" ms-12 me-12 md:rounded-full sm:rounded-none mt-4 bg-transparent" src={image} alt="" />
   
</a>




    );
};

export default Buyers;