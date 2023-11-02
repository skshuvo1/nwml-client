import React from 'react';
import warping from '../../../assets/warping.webp'
import sizing from '../../../assets/sizing.jpg'
import folding from '../../../assets/mending.webp'
import toyota from '../../../assets/toyota.webp'
import { FaArrowRight } from 'react-icons/fa6';
import Partner from '../Partner/Partner';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
          <div>
            <h2 className='font-bold text-center text-2xl my-8'>Our <span className='text-red-500'> Projects</span></h2>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
<div className="card card-compact bg-base-100 shadow-xl">
  <figure className='hover:scale-150 duration-500 hover:z-10'><img className=' h-52' src={warping} alt="warping" /></figure>
  <div className="card-body">
    <h2 className="card-title">Warping</h2>
    <p className='text-slate-500'>Warping is the preparation of yarn to weave fabric. It is the transfer of many yarns from the creel of single packages to a beam. The yarns will form a parallel sheet of yarn wound onto the beam.<Link to='/warping' className='text-blue-700 underline'>See More</Link></p>
  </div>
</div>

<div className="card card-compact bg-base-100 shadow-xl">
  <figure className='hover:scale-150 duration-500 hover:z-10'><img className=' h-52' src={sizing} alt="sizing" /></figure>
  <div className="card-body">
    <h2 className="card-title">Sizing</h2>
    <p className='text-slate-500'>Sizing is a complementary operation carried out on warps formed by spun yarns with insufficient tenacity or by continuous filament yarns with zero twists. In general, when sizing is necessary.<Link to='/sizing' className='text-blue-700 underline'>See More</Link></p>
  </div>
</div>

<div className="card card-compact bg-base-100 shadow-xl">
  <figure className='hover:scale-150 duration-500 hover:z-10'><img className=' h-52' src={folding} alt="Folding" /></figure>
  <div className="card-body">
    <h2 className="card-title">Folding</h2>
    <p className='text-slate-500'>This is a textile machinery works as fabric folders used in textile factory or textile mills. This machine is specially designed primarily for the folding of fabric and textile design.<Link to='/folding' className='text-blue-700 underline'>See More</Link></p>
  </div>
</div>
<div className="card card-compact bg-base-100 shadow-xl">
  <figure className='hover:scale-150 duration-500 hover:z-10'><img className=' h-52' src={toyota} alt="toyota" /></figure>
  <div className="card-body">
    <h2 className="card-title">Production</h2>
    <p className='text-slate-500'>Toyota Industries develops and manufacturers air jet looms which insert the weft yarn using air., and water jet looms which insert the weft yarn using water.<Link to='/production' className='text-blue-700 underline'>See More</Link></p>
    
  </div>
</div>
</div>

<div>
</div>
        </div>
  <div className='mt-8'>
  <Partner></Partner>
  </div>
        </div>
    );
};

export default Projects;