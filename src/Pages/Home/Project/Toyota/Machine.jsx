import React from 'react';
import ToyotaBrief from './ToyotaBrief';
import './machine.css'

const Machine = () => {
    return (
        <div className='m-8'>
            <h2 className=' font-bold text-center mb-8 pt-8 text-2xl'>Our <span className='text-red-500'>Machines</span> </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className="card w-84 h-84 rounded-xl bg-base-100 shadow-xl hover:scale-110 hover:z-10">
  <figure><img className=' rounded w-full ' src="https://konicainternational.b-cdn.net/wp-content/uploads/2019/10/UNADJUSTEDNONRAW_thumb_75c1.jpg" alt="Shoes" /></figure>
</div>

      <div className="card w-84 rounded-xl bg-base-100 shadow-xl hover:scale-110 hover:z-10">
  <figure><img className=' rounded w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEns-3xPIAwet24OiOKcX2nMyAWAStSLXiTRgCugwFnUZXjdeI67JyR_xdgJw_jOch3f0&usqp=CAU" alt="Shoes" /></figure>
</div>
      <div className="card w-84 rounded-xl bg-base-100 shadow-xl hover:scale-110 hover:z-10">
  <figure><img className=' rounded w-full' src="https://5.imimg.com/data5/WL/LP/MY-2892574/toyota-jat-710-airjet-loom-500x500.jpeg" alt="Shoes" /></figure>
</div>
      <div className="card w-84 rounded-xl bg-base-100 shadow-xl hover:scale-110 hover:z-10">
  <figure><img className=' rounded w-full' src="https://www.konicainternational.com/wp-content/uploads/2021/07/T710-WW-190CM-1.jpg" alt="Shoes" /></figure>
</div>
</div>
<ToyotaBrief></ToyotaBrief>
</div>
    );
};

export default Machine;