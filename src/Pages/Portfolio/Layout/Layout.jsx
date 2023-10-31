import React from 'react';
import Mission from '../Mission/Mission';
import './Layout.css'
import { FaArrowDownLong, FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";

const Layout = () => {
    return (
        <div className='bg-pink-50 '>
            <h2 className='font-bold text-center text-2xl py-3 mb-12'>Lay<span className ='text-red-500'>out</span></h2>
            <div className='bg-red-200 w-full  m-auto md:w-2/3 lg:w-1/3 text-gray-500 hover:scale-110 hover:rounded-xl'>
            <div className='flex justify-center m-auto border bg-red-200 border-gray-400 w-48 mb-12 -mt-8 -rotate-12'>
                    <h2 className='bg-red-200'>Gate</h2>
                </div>
            <div className='flex justify-center'>
                    <div>
                    <h2 className='border border-gray-400 w-20  me-8 mt-32 flex justify-center items-center h-24'>Quarter</h2>
                    </div>
                   <div className='flex flex-col -mt-8 gap-2 '>
                    <div className='border border-gray-400 mt-2 w-20 -ms-10 -rotate-12 p-1'>
                        <h2>Picanol, Vamatex <br /> Sizing 2</h2>
                    </div>
                   <div className='border border-gray-400 w-20 -ms-6 -rotate-12'>
                        <h2>Mending 2</h2>
                    </div>
                      <div className='border border-gray-400 w-16 h-36 mt-4'>
                    <h2 className='text-xl -rotate-90 mt-20'>Toyota</h2>
                </div>
                   </div>
                <div className='flex flex-col gap-6 items-center justify-center w-8 mt-20'>
                    <FaArrowUpLong className='-mt-6'></FaArrowUpLong>
                <h2 className='-rotate-90'>Road</h2>
                <FaArrowDownLong></FaArrowDownLong>
                    </div>
                    
                    <div className='flex flex-col mt-14'>
                        <div>
                            <h2 className='border border-gray-400 flex justify-center items-center -mt-20 h-24 -rotate-6 -ms-3 border-b-0 '>Store</h2>
                        </div>
                    <div className='flex mb-2'>
                        <h2 className='border border-gray-400 w-14 -ms-2 p-1'>R & D</h2>
                        <h2 className='border border-gray-400 w-24 text-center text-xl'>Rapier</h2>
                    </div>
                <div className='flex'>
                <div className='border border-gray-400 w-16 h-36'>           
                <h2 className='text-xl -rotate-90 mt-20'>Sizing</h2>
                </div>
               <div className='border border-gray-400 h-36  border-l-0'>
               <h2 className='-rotate-90 mt-16'>Folding & <br /> Mending</h2>
                </div>
                </div>
                    </div>
                 </div>
            <div>
                <div className='flex my-4 ms-24 md:ms-40  gap-5'>
                    <FaArrowUpLong className='-mt-6'></FaArrowUpLong>
                <h2>Road</h2>
                <FaArrowRightLong></FaArrowRightLong>
                </div>

                <div className='flex justify-between mx-8 gap-12'>
                <div className='md:ms-20 lg:ms-12 '>
                <div className='flex gap-0'>
                   <div>
                   <h2 className='ms-0 flex justify-center items-center border border-gray-400 mb-24 w-20 '>Store</h2>
                    </div> 
                    <div>
                    <h2 className='ms-0 flex justify-center items-center border border-gray-400 border-l-0  mb-24 w-20 '>Office</h2>
                    </div>
                    
                     </div>
                     <div className='border border-gray-400 flex justify-center items-center w-20 -mt-20 ms-20 mb-4'>
                        <h2>Mosque</h2>
                     </div>
                </div>
                <div className='me-12'>
                    <h2 className='border border-gray-400 -mt-14 flex justify-center items-center py-2'>Store</h2>
                    <h2 className='border border-gray-400 flex justify-center items-center w-24 py-3'>CMD</h2>
                </div>
                </div> 
                     
                <div className='flex justify-center m-auto border border-gray-400 w-48'>
                    <h2>Gate</h2>
                </div>
            </div>
        </div>
            <Mission></Mission>
        </div>
    );
};

export default Layout;