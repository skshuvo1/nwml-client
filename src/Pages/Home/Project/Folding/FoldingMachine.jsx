import React from 'react';
import FoldingBrief from './FoldingBrief';

const FoldingMachine = () => {
    return (
        <div>
        <h2 className=' font-bold text-center mb-8 pt-8 text-2xl'>Our <span className='text-red-500'>Machines</span> </h2>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
<div className="card flex-row m-auto w-80  h-80  rounded-xl bg-base-100 shadow-xl hover:scale-150 hover:z-10 duration-300">
<figure><img className='h-full rounded w-full ' src="https://b4d213501e.cbaul-cdnwnd.com/9e3949838c4c336220d6aed8a70d0348/system_preview_detail_200000275-2652726646/Fabric%20Inspaction1.jpg" alt="Shoes" /></figure>
</div>

<div className="card flex-row m-auto w-80  h-80  rounded-xl bg-base-100 shadow-xl hover:scale-150 hover:z-10 duration-300">
<figure><img className='h-full rounded w-full' src="https://i.ytimg.com/vi/ZE-0Pma_G9o/maxresdefault.jpg" alt="Shoes" /></figure>
</div>
<div className="card flex-row m-auto w-80  h-80  rounded-xl bg-base-100 shadow-xl hover:scale-150 hover:z-10 duration-300">
<figure><img className='h-full rounded w-full' src="https://5.imimg.com/data5/DG/AT/MY-3135716/2-250x250.jpg" alt="Shoes" /></figure>
</div>
<div className="card flex-row m-auto w-80  h-80  rounded-xl bg-base-100 shadow-xl hover:scale-150 hover:z-10 duration-300">
<figure><img className='h-full rounded w-full' src='https://5.imimg.com/data5/ZV/AI/GE/SELLER-3599915/fabric-single-folding-machines-500x500.jpg' alt="Shoes" /></figure>
</div>
</div>
<FoldingBrief></FoldingBrief>
  </div>
    );
};

export default FoldingMachine;