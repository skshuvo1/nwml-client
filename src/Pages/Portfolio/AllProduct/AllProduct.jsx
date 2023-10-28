import React from 'react';



const AllProduct = ({product}) => {
    const {image, name} = product
    return (
  
  
<div class=" w-64 h-96 bg-red-100 relative group ">
    
  <img className='object-cover h-full rounded-2xl' src={image} />
  <div class="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-1/2 flex justify-center items-end text-xl bg-gray-100 text-black font-semibold">{name}</div>

</div>



    );
};

export default AllProduct;