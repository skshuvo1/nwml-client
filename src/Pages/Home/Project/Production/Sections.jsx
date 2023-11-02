import React from 'react';
import { Link } from 'react-router-dom';
import ProductionBrief from './ProductionBrief';

const Sections = () => {
   
    return (
        <div>
            <h2 className='font-bold text-center text-2xl my-8'>Production <span className='text-red-500'> Sections </span>Are</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
            <div className="w-full m-auto  rounded overflow-hidden hover:scale-110 hover:z-10 hover:bg-black hover:text-white shadow-lg">
  <img src='https://www.toyota-industries.com/products/items/LWT810_2.jpg' alt="Product A" className="w-full h-48 object-cover" />
  <div className="px-6 py-4 hover:text-white ">
    <div className="font-bold text-xl mb-2">Toyota Airjet</div>
    <p className=" text-base">
Product B is a stylish and affordable fashion accessory. It is designed to meet the latest fashion trends and provide excellent value for money.<Link to='/toyota' className='text-blue-700 underline'> See More</Link>
    </p>
  </div>
</div>
            <div className="w-full m-auto  rounded overflow-hidden hover:scale-110 hover:z-10 hover:bg-black hover:text-white shadow-lg">
  <img src='https://image.made-in-china.com/2f0j00vLkUNAVGZpoI/Electronic-Weft-Selector-Towel-Rapier-Machine-Weaving-Loom.jpg' alt="Product A" className="w-full h-48 object-cover" />
  <div className="px-6 py-4 hover:text-white">
    <div className="font-bold text-xl mb-2">Rapier</div>
    <p className=" text-base">
Product B is a stylish and affordable fashion accessory. It is designed to meet the latest fashion trends and provide excellent value for money.<Link to = '/rapier' className='text-blue-700 underline'> See More</Link>
    </p>
  </div>
</div>
            <div className="w-full m-auto  rounded overflow-hidden hover:scale-110 hover:z-10 hover:bg-black hover:text-white shadow-lg">
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPddyrkEU-tcEvwlt57mh-ucBvYRz5g24vw&usqp=CAU' alt="Product A" className="w-full h-48 object-cover" />
  <div className="px-6 py-4 hover:text-white">
    <div className="font-bold text-xl mb-2">Picanol</div>
    <p className=" text-base">
Product B is a stylish and affordable fashion accessory. It is designed to meet the latest fashion trends and provide excellent value for money.<Link to='/picanol' className='text-blue-700 underline'> See More</Link>
    </p>
  </div>
</div>
            <div className="w-full m-auto  rounded overflow-hidden hover:scale-110 hover:z-10 hover:bg-black hover:text-white shadow-lg">
  <img src='https://www.toyota-industries.com/products/items/LWT810_2.jpg' alt="Product A" className="w-full h-48 object-cover" />
  <div className="px-6 py-4 hover:text-white">
    <div className="font-bold text-xl mb-2">Vamatex</div>
    <p className=" text-base">
Product B is a stylish and affordable fashion accessory. It is designed to meet the latest fashion trends and provide excellent value for money.<Link to='/vamatex' className='text-blue-700 underline'> See More</Link>
    </p>
  </div>
</div>
            </div>
            <ProductionBrief></ProductionBrief>
        </div>
    );
};

export default Sections;