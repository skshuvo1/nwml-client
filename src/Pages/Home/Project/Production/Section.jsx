import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({section}) => {
    const {name, image,details} = section;
    return (
        
<div className="w-full m-auto  rounded overflow-hidden shadow-lg">
  <img src={image} alt="Product A" className="w-full h-48 object-cover" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>
    <p className="text-gray-700 text-base">
{details}<Link className='text-blue-700 underline'> See More</Link>
    </p>
    
  </div>

</div>

    );
};

export default Section;