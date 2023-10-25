import React from 'react';
import warping from '../../assets/warping.webp'
import sizing from '../../assets/Sizing.jpg'
import folding from '../../assets/mending.webp'
import toyota from '../../assets/toyota.webp'
import { FaArrowRight } from 'react-icons/fa6';
import Partner from '../Partner/Partner';

const Projects = () => {
    return (
        <div>
            <h2 className='font-bold text-center text-2xl my-8'>Our <span className='text-red-500'> Projects</span></h2>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
<div className="card card-compact bg-base-100 shadow-xl">
  <figure className=''><img className='hover:scale-150 duration-500 h-52' src={warping} alt="warping" /></figure>
  <div className="card-body">
    <h2 className="card-title">Warping</h2>
    <p className='text-slate-500'>Warping is the preparation of yarn to weave fabric. It is the transfer of many yarns from the creel of single packages to a beam. The yarns will form a parallel sheet of yarn wound onto the beam.</p>
    <div className='mt-6 text-center'>
    <button className="btn btn-outline btn-secondary">See more <FaArrowRight></FaArrowRight></button>
</div>
  </div>
</div>

<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className='hover:scale-150 duration-500 h-52' src={sizing} alt="sizing" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sizing</h2>
    <p className='text-slate-500'>Sizing is a complementary operation carried out on warps formed by spun yarns with insufficient tenacity or by continuous filament yarns with zero twists. In general, when sizing is necessary, the yarn beam is warped; therefore, all beams corresponding to the beams are fed, as soon as warping is completed, to the sizing machine where they are assembled.</p>
    <div className='mt-6 text-center'>
    <button className="btn btn-outline btn-secondary">See more <FaArrowRight></FaArrowRight></button>
</div>
  </div>
</div>

<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className='hover:scale-150 duration-500 h-52' src={folding} alt="Folding" /></figure>
  <div className="card-body">
    <h2 className="card-title">Folding</h2>
    <p className='text-slate-500'>This is a textile machinery works as fabric folders used in textile factory or textile mills. This machine is specially designed primarily for the folding of fabric and textile design. Clothes folding machine is mainly used for folding cloth. These clothes folding machines are easy in operation and perform smoothly without noise.</p>
    <div className='mt-6 text-center'>
    <button className="btn btn-outline btn-secondary">See more <FaArrowRight></FaArrowRight></button>
</div>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className='hover:scale-150 duration-500 h-52' src={toyota} alt="toyota" /></figure>
  <div className="card-body">
    <h2 className="card-title">Production</h2>
    <p className='text-slate-500'>Toyota Industries develops and manufacturers air jet looms which insert the weft yarn using air, and water jet looms which insert the weft yarn using water. We provide our customers all over the world with state-of-the-art weaving machinery that excels in speedy and reliable performance.</p>
    <div className='mt-6 text-center'>
    <button className="btn btn-outline btn-secondary">See more <FaArrowRight></FaArrowRight></button>
</div>
  </div>
</div>
</div>
<div className='mt-6 text-center'>
    <button className="btn btn-outline btn-secondary mb-4">See All Project <FaArrowRight></FaArrowRight></button>
</div>
<div>
  <Partner></Partner>
</div>
        </div>
    );
};

export default Projects;