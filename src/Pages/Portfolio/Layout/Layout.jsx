import React from 'react';
import Mission from '../Mission/Mission';

const Layout = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-2xl my-8 py-3'>Lay<span className='text-red-500'>out</span></h2>
            <div className='flex justify-center gap-8'>
                <div className='border border-gray-400 w-16 h-96'>
                    <h2 className='text-xl text-gray-500 -rotate-90 mt-36'>Toyota</h2>
                </div>
                <div className='border border-gray-400 w-16 h-96 ms-48'>
                    
                <h2 className='text-xl text-gray-500 -rotate-90 mt-36'>Sizing</h2>
                </div>
            </div>
            <div>
                <h2 className='mb-0'>Road</h2>
                <div className='flex gap-0'>
                   <div>
                   <h2 className='ms-0 flex justify-center items-center border border-gray-400 mt-12 mb-24 h-24 w-36'>Store</h2>
                    </div> 
                    <div>
                    <h2 className='ms-0 flex justify-center items-center border border-gray-400  mt-12 mb-24 h-24 w-36'>Office</h2>
                    </div>
                     </div>
                <div className='flex justify-center m-auto border border-gray-400 w-48 h-12'>
                    <h2>Gate</h2>
                </div>
            </div>
            <Mission></Mission>
        </div>
    );
};

export default Layout;